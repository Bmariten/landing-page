import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [userType, setUserType] = useState<"brand" | "influencer" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Email to the user (business/influencer)
    const userMessage = {
      to_name: email,
      from_name: "Invex Partners",
      message: `Hi ${email},\n\nThank you so much for joining the Invex Partners waitlist! 🎉\n\nWe’re absolutely thrilled to have you onboard as we prepare to launch our revolutionary platform. Stay tuned — we’ve got some exciting updates and offers coming your way soon. You’re going to love it!\n\nBest wishes and warm regards,\nThe Invex Partners Team 💙`
    };

    // Email to you (the owner of Invex Partners)
    const ownerMessage = {
      to_name: "Invex Partners Owner",
      from_name: email,
      message: `New user joined the waitlist! Email: ${email}, User Type: ${userType}`
    };

    // Send email to the user (business/influencer) using the new template ID
    emailjs
      .send(
        "service_f9977ru", 
        "template_zv8djsk",  // Use new template ID here for the user email
        userMessage, 
        "gkAkR-wSe1Jfhu_h-"
      )
      .then((response) => {
        console.log("User email sent successfully", response);
      })
      .catch((error) => {
        console.error("Error sending user email", error);
      });

    // Send email to the owner (you) using the current emailJS template for owner notification
    emailjs
      .send(
        "service_f9977ru", 
        "template_new_waitlist_user", 
        ownerMessage, 
        "gkAkR-wSe1Jfhu_h-"
      )
      .then((response) => {
        console.log("Owner email sent successfully", response);
      })
      .catch((error) => {
        console.error("Error sending owner email", error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
          placeholder="you@company.com"
          required
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          I am a...
        </label>
        <div className="grid grid-cols-2 gap-4">
          <button
            type="button"
            onClick={() => setUserType("brand")}
            className={`px-4 py-3 rounded-lg border ${
              userType === "brand"
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-300 hover:border-blue-300"
            } transition-all duration-300`}
          >
            Brand/Agency
          </button>
          <button
            type="button"
            onClick={() => setUserType("influencer")}
            className={`px-4 py-3 rounded-lg border ${
              userType === "influencer"
                ? "border-blue-600 bg-blue-50 text-blue-600"
                : "border-gray-300 hover:border-blue-300"
            } transition-all duration-300`}
          >
            Influencer
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200 flex items-center justify-center gap-2 group"
      >
        JOIN WAITLIST
      </button>
    </form>
  );
};

export default WaitlistForm;
