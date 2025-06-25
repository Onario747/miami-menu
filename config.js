// Configuration file for Miami Menu Admin Dashboard
// Replace these values with your actual keys

const CONFIG = {
  // Firebase Configuration
  firebase: {
    apiKey: "AIzaSyDwbtUp6ROeAlNPphEq9AMMShUq6Px6xZU",
    authDomain: "miami-menu.firebaseapp.com",
    projectId: "miami-menu",
    storageBucket: "miami-menu.firebasestorage.app",
    messagingSenderId: "917393218492",
    appId: "1:917393218492:web:23a3fd511f12837d8269b9",
  },

  // ImgBB API Configuration
  imgbb: {
    apiKey: "033ae924c245c47a196d5b97d7fa338d", // Get from https://api.imgbb.com/
  },
};

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = CONFIG;
}
