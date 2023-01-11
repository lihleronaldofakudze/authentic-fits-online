import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDgCr--8Mnw1dDpengMTX3ulav8EfQTw50",
  authDomain: "authenticfitsonline.firebaseapp.com",
  projectId: "authenticfitsonline",
  storageBucket: "authenticfitsonline.appspot.com",
  messagingSenderId: "354481277473",
  appId: "1:354481277473:web:0849518fc7f41fc654f160",
  measurementId: "G-J7C65XQW54",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
