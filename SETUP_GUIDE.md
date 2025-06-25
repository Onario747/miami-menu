# Miami Menu Admin Dashboard Setup Guide

This guide will help you set up the admin dashboard for your Miami Menu web app using Firebase as the backend service.

## Prerequisites

- A Google account
- Basic understanding of HTML/JavaScript
- Web browser with internet connection

## Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "miami-menu")
4. Disable Google Analytics (optional for this project)
5. Click "Create project"

## Step 2: Enable Firebase Services

### Enable Authentication

1. In your Firebase project console, click "Authentication" in the left sidebar
2. Click "Get started"
3. Go to the "Sign-in method" tab
4. Click on "Email/Password"
5. Enable it and save

### Enable Firestore Database

1. Click "Firestore Database" in the left sidebar
2. Click "Create database"
3. Choose "Start in test mode" (you can secure it later)
4. Select your preferred location
5. Click "Done"

### Enable Storage

1. Click "Storage" in the left sidebar
2. Click "Get started"
3. Keep the default security rules for now
4. Choose the same location as your Firestore
5. Click "Done"

## Step 3: Get Firebase Configuration

1. In your Firebase project console, click the gear icon (⚙️) next to "Project Overview"
2. Select "Project settings"
3. Scroll down to "Your apps" section
4. Click the web icon (`</>`) to create a web app
5. Register your app with a nickname (e.g., "Miami Menu Web")
6. Copy the Firebase configuration object

## Step 4: Update Your Files

Replace the placeholder Firebase configuration in these files:

- `admin-login.html`
- `admin-dashboard.html`
- `index.html`

Replace this section in each file:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key-here",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id",
};
```

With your actual Firebase configuration from Step 3.

## Step 5: Create Admin User

1. Go to Firebase Console > Authentication > Users
2. Click "Add user"
3. Enter an email and password for your admin account
4. Click "Add user"

## Step 6: Set up Firebase Security Rules (Optional but Recommended)

### Firestore Rules

In Firebase Console > Firestore Database > Rules, replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /menuItems/{document} {
      allow read: if true;
      allow write, delete: if request.auth != null;
    }
  }
}
```

### Storage Rules

In Firebase Console > Storage > Rules, replace the rules with:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /menu-items/{allPaths=**} {
      allow read: if true;
      allow write, delete: if request.auth != null;
    }
  }
}
```

## Step 7: Deploy Your App

### Option 1: Firebase Hosting (Recommended)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. In your project directory: `firebase init hosting`
4. Select your Firebase project
5. Set public directory as current directory (press Enter)
6. Configure as single-page app: No
7. Don't overwrite files
8. Deploy: `firebase deploy`

### Option 2: Other Hosting Services

You can upload all files to any web hosting service like:

- Netlify
- Vercel
- GitHub Pages
- Traditional web hosting

## Step 8: Test Your Setup

1. Open your deployed website
2. Navigate to `your-domain.com/admin-login.html`
3. Login with your admin credentials
4. Try uploading a test image
5. Check if the main menu page displays the uploaded image

## File Structure

Your project should have these files:

```
miami-menu/
├── index.html          (Main menu page)
├── index.css           (Styles)
├── admin-login.html    (Admin login page)
├── admin-dashboard.html (Admin dashboard)
├── firebase-config.js  (Firebase configuration - optional)
└── SETUP_GUIDE.md     (This guide)
```

## Features

### Admin Dashboard

- **Upload Images**: Add new menu items with custom names
- **Delete Images**: Remove menu items you no longer need
- **Real-time Updates**: Changes appear immediately on the main site
- **Secure Authentication**: Only authorized users can access admin features

### Main Menu Page

- **Dynamic Loading**: Automatically displays all uploaded menu items
- **Responsive Design**: Works on desktop and mobile devices
- **Fast Loading**: Images are optimized and cached by Firebase

## Troubleshooting

### Common Issues

1. **Firebase configuration errors**

   - Double-check your Firebase config object
   - Ensure all services (Auth, Firestore, Storage) are enabled

2. **Images not loading**

   - Check Firebase Storage rules
   - Verify images were uploaded successfully in Firebase Console

3. **Can't login to admin**

   - Verify the user exists in Firebase Authentication
   - Check browser console for error messages

4. **CORS errors**
   - Make sure you're accessing the site via HTTP/HTTPS, not file://
   - Use Firebase Hosting or another web server

### Getting Help

- Check the browser console for error messages
- Visit [Firebase Documentation](https://firebase.google.com/docs)
- Check [Stack Overflow](https://stackoverflow.com/questions/tagged/firebase) for common issues

## Cost Considerations

Firebase has a generous free tier that should be sufficient for most small restaurant menus:

- **Firestore**: 50K reads, 20K writes, 20K deletes per day
- **Storage**: 5GB total, 1GB downloads per day
- **Authentication**: Unlimited users

## Security Best Practices

1. **Enable App Check** for additional security
2. **Use strong passwords** for admin accounts
3. **Regularly review** Firebase security rules
4. **Monitor usage** in Firebase Console
5. **Keep Firebase SDK updated**

## Next Steps

Once your basic setup is working, you might want to:

- Add image editing capabilities
- Implement menu categories
- Add menu item descriptions and prices
- Create multiple admin users
- Add analytics tracking
- Implement a contact form

---

**Need help?** Check the Firebase documentation or create an issue in your project repository.
