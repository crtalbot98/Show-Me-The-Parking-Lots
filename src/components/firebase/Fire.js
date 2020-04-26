import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB5lk_2cR4NhDYfiRvIcVprS0Ckh7Gd3x8",
    authDomain: "final-project-321a1.firebaseapp.com",
    databaseURL: "https://final-project-321a1.firebaseio.com",
    projectId: "final-project-321a1",
    storageBucket: "final-project-321a1.appspot.com",
    messagingSenderId: "957009585915",
    appId: "1:957009585915:web:5b3d7f187bf82887dcf25e"
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;