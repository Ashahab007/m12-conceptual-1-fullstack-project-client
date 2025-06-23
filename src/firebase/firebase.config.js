import { initializeApp } from "firebase/app";
// # firebase email used ammar.pics1@gmail.com

/* .env.local
VITE_apiKey=AIzaSyDET2zIr68cNq_kl-sfHatwkWBWke61nw8
VITE_authDomain=plantnet-sess-conceptua-client.firebaseapp.com
VITE_projectId=plantnet-sess-conceptua-client
VITE_storageBucket=plantnet-sess-conceptua-client.firebasestorage.app
VITE_messagingSenderId=729656275581
VITE_appId=1:729656275581:web:bb79526bc861c75861371
VITE_API_URL=http://localhost:3000
} */

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
