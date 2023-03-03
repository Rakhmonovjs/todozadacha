
import { getAuth } from "firebase/auth";

const app = {
  apiKey: "AIzaSyDc2Vx7CCMQSd2jDvGK0Vl7DdKH_XlpGl4",
  authDomain: "toodo-90365.firebaseapp.com",
  projectId: "toodo-90365",
  storageBucket: "toodo-90365.appspot.com",
  messagingSenderId: "705287189922",
  appId: "1:705287189922:web:f0073d57391e946e306efb",
  measurementId: "G-Z816LEGXKW"
};

// Initialize Firebase
export const auth = getAuth(app);
