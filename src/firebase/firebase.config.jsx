// firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZB1QV6rw-V7TTRjt0jS8LGvHFbrGEbzE",
  authDomain: "tienda-p-pe.firebaseapp.com",
  projectId: "tienda-p-pe",
  storageBucket: "tienda-p-pe.appspot.com",
  messagingSenderId: "597636362554",
  appId: "1:597636362554:web:b1eb7a93d1279a257a6003"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

