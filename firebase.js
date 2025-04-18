import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5u2yl81kt2pt0eZSalwkN1b9TZui423I",
  authDomain: "your-mark-85e8f.firebaseapp.com",
  projectId: "your-mark-85e8f",
  storageBucket: "your-mark-85e8f.appspot.com",
  messagingSenderId: "343420659164",
  appId: "1:343420659164:web:163fdab485634ee7bd9b19",
  measurementId: "G-N1P7BQSHHD",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
// const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.useDeviceLanguage();

export { auth };
