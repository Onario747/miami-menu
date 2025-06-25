# Miami Menu - Firebase + ImgBB Setup Guide

This system uses **Firebase** for authentication and database, and **ImgBB** for image hosting.

## 🔥 Architecture

- **Firebase Authentication**: Secure admin login
- **Firebase Firestore**: Database to store image metadata and URLs
- **ImgBB**: Free image hosting service
- **Combined Power**: Firebase reliability + ImgBB's free image hosting

## 📋 Prerequisites

1. Firebase project (already configured)
2. ImgBB API key (free)

## 🚀 Quick Setup

### Step 1: Get ImgBB API Key (FREE)

1. Go to https://api.imgbb.com/
2. Click "Get API Key"
3. Sign up with your email
4. Copy your API key

### Step 2: Configure API Key

1. Open `config.js` file
2. Replace `YOUR_IMGBB_API_KEY_HERE` with your actual ImgBB API key:

```javascript
imgbb: {
  apiKey: "your_actual_api_key_here";
}
```

### Step 3: Set Up Firebase Authentication

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `miami-menu`
3. Go to Authentication > Users
4. Click "Add User"
5. Create admin account with email/password

## 🎯 How It Works

### For Admins:

1. Open `admin-login.html`
2. Login with Firebase credentials
3. Upload images to ImgBB
4. Image URLs automatically saved to Firebase

### For Visitors:

1. Open `index.html`
2. Images load from ImgBB via Firebase database
3. Fast loading with ImgBB's global CDN

## 📁 File Structure

```
miami-menu/
├── config.js              # Configuration (API keys)
├── index.html             # Public menu page
├── admin-login.html       # Admin login
├── admin-dashboard.html   # Admin panel
├── index.css             # Styling
└── SETUP_IMGBB_FIREBASE.md # This guide
```

## ✅ Benefits

- **Firebase**: Professional authentication & database
- **ImgBB**: Unlimited free image hosting
- **Fast**: Global CDN delivery
- **Secure**: Protected admin access
- **Scalable**: Handles any number of images

## 🔧 Testing

1. Open `admin-login.html`
2. Login with your Firebase admin account
3. Upload a test image
4. Check `index.html` to see it appear
5. Delete test image from admin panel

## 💡 Pro Tips

- ImgBB provides thumbnails automatically
- Images are stored permanently on ImgBB
- Firebase tracks all image metadata
- Perfect combination for restaurants!

## 🆘 Troubleshooting

**Upload not working?**

- Check if ImgBB API key is correct in `config.js`
- Ensure you're logged in to Firebase

**Images not showing?**

- Verify Firebase configuration
- Check browser console for errors

**Can't login?**

- Make sure admin user exists in Firebase Authentication
- Check email/password spelling

## 🎉 You're Ready!

Your Miami Menu admin system is now ready with Firebase backend and ImgBB image hosting!
