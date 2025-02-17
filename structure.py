import os

def display_structure(path, prefix="", ignore_dirs=None):
    """Recursively display the file structure of a directory, ignoring specified directories."""
    if ignore_dirs is None:
        ignore_dirs = set()  # Default to an empty set if no ignore_dirs are provided

    if os.path.isdir(path):
        # Get all items in the directory
        items = os.listdir(path)
        # Filter out ignored directories
        items = [item for item in items if item not in ignore_dirs]
        for i, item in enumerate(items):
            # Full path of the item
            full_path = os.path.join(path, item)
            # Check if it's the last item in the directory
            is_last = (i == len(items) - 1)
            # Print the current item
            print(f"{prefix}{'└── ' if is_last else '├── '}{item}")
            # If it's a directory, recursively display its contents
            if os.path.isdir(full_path):
                display_structure(full_path, prefix + ("    " if is_last else "│   "), ignore_dirs)
    else:
        print(f"{prefix}└── {os.path.basename(path)}")

if __name__ == "__main__":
    # Specify the path to your project (default is the current directory)
    project_path = os.getcwd()
    # Directories to ignore (e.g., 'node_modules')
    ignore_dirs = {"node_modules"}
    print(f"Project Structure for: {project_path}")
    display_structure(project_path, ignore_dirs=ignore_dirs)