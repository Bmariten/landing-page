// src/sendEmail.js
import emailjs from '@emailjs/browser';

const sendEmail = async (email, userType) => {
  // Template IDs for EmailJS
  const ownerTemplateId = 'template_hh8gyvp'; // Template for owner notification
  const userTemplateId = 'template_iwfcyzb'; // Template for user thank-you email

  // Email parameters for the owner (you)
  const ownerParams = {
    user_email: email,
    user_type: userType,
  };

  // Email parameters for the user (brand/influencer)
  const userParams = {
    user_email: email,
    user_type: userType,
  };

  try {
    // Send email to the owner (you)
    await emailjs.send(
      'service_f9977ru', // Your service ID
      ownerTemplateId, // Template for owner notification
      ownerParams, // Parameters for owner email
      'gkAkR-wSe1Jfhu_h-' // Your EmailJS user key
    );

    // Send email to the user (brand/influencer)
    await emailjs.send(
      'service_f9977ru', // Your service ID
      userTemplateId, // Template for user thank-you email
      userParams, // Parameters for user email
      'gkAkR-wSe1Jfhu_h-' // Your EmailJS user key
    );

    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Failed to send emails:', error);
    throw error; // Re-throw the error to handle it in handleSubmit
  }
};

export default sendEmail;