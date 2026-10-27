// =====================================================================
// JJ QBank — sign-in settings
// ---------------------------------------------------------------------
// While JJ_FIREBASE is null, sign-in is OFF and the site works exactly
// as before (progress saved only in each person's browser).
//
// To turn sign-in ON: paste the firebaseConfig object from your Firebase
// project (Project settings → General → Your apps → Web app) in place of
// null below, keeping the same format, e.g.
//
//   window.JJ_FIREBASE = {
//     apiKey: "AIza...",
//     authDomain: "jj-qbank.firebaseapp.com",
//     projectId: "jj-qbank",
//     storageBucket: "jj-qbank.appspot.com",
//     messagingSenderId: "1234567890",
//     appId: "1:1234567890:web:abc123"
//   };
//
// To turn sign-in OFF again at any time: set it back to null.
// =====================================================================
window.JJ_FIREBASE = {
  apiKey: "AIzaSyBUduwenifg0dAT3CbbJ_tQhqtDS9Hnwng",
  authDomain: "jj-qbank.firebaseapp.com",
  projectId: "jj-qbank",
  storageBucket: "jj-qbank.firebasestorage.app",
  messagingSenderId: "325698552260",
  appId: "1:325698552260:web:2e31507c805b76b9aee491"
};

// Google accounts that can open admin.html and block users.
// Must match the list in the Firestore rules (firestore-rules.txt).
window.JJ_ADMINS = ["gurdeepsayal@gmail.com", "jasjotsayal@gmail.com", "jasjot.sayal@student.windsor.edu"];
