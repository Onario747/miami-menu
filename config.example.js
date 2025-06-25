// Configuration file for Miami Menu Admin Dashboard
// Copy this file to config.js and replace with your actual keys

const CONFIG = {
  // Firebase Configuration
  firebase: {
    apiKey: "your-firebase-api-key-here",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.firebasestorage.app",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id",
  },

  // ImgBB API Configuration
  imgbb: {
    apiKey: "YOUR_IMGBB_API_KEY_HERE", // Get from https://api.imgbb.com/
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
