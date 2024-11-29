/* eslint-env serviceworker */
importScripts(
    "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyBQI1b67IGIJIO1EUr_RcXMIpshb2GaTeU",
  authDomain: "movie-app-6b4a4.firebaseapp.com",
  projectId: "movie-app-6b4a4",
  storageBucket: "movie-app-6b4a4.firebasestorage.app",
  messagingSenderId: "404673604362",
  appId: "1:404673604362:web:d66d90cea193b79fd268f3",
};);

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    // self.addEventListener("notificationclick", function (event) {
    //   event.notification.close()
    //   // event.waitUntil(clients.openWindow("https://kma-notification.web.app/"))
    //   console.log(1)
    // })
});
