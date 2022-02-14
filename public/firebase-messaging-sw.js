importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "",
    projectId: "",
    messagingSenderId: "",
    appId: ""
});

const firebaseMessaging = firebase.messaging();
firebaseMessaging.setBackgroundMessageHandler(payload => {
    const title = "";
    return self.registration.showNotification(title, payload.notification);
});
