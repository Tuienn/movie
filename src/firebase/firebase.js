import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBQI1b67IGIJIO1EUr_RcXMIpshb2GaTeU",
    authDomain: "movie-app-6b4a4.firebaseapp.com",
    projectId: "movie-app-6b4a4",
    storageBucket: "movie-app-6b4a4.firebasestorage.app",
    messagingSenderId: "404673604362",
    appId: "1:404673604362:web:d66d90cea193b79fd268f3",
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey:
                "BIAAzWD5-hpA7efc80h5NWzCYrrOP0OYu7MPjevI5Aymh5hmDRoDFquWm6QPr7uV6djjYDxOY3jUvDb84zMaJAw",
        });
        return token;
    }
};
