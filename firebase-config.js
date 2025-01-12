import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYISQS9bHDbPSz_WzGx7sG1gI_C-GfAzM",
  authDomain: "mapfre-voltea.firebaseapp.com",
  databaseURL: "https://mapfre-voltea-default-rtdb.firebaseio.com",
  projectId: "mapfre-voltea",
  storageBucket: "mapfre-voltea.firebasestorage.app",
  messagingSenderId: "532381967364",
  appId: "1:532381967364:web:8f872693dd8f30a265c151",
  measurementId: "G-8YJTE5QJTZ"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
