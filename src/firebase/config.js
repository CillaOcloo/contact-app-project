import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDjmnDYxIhrVNG18U0AjdEjX1P7u6HzOq4",
  authDomain: "contact-app-fb.firebaseapp.com",
  projectId: "contact-app-fb",
  storageBucket: "contact-app-fb.appspot.com",
  messagingSenderId: "688230295345",
  appId: "1:688230295345:web:6a810ecda8c86ed510b210"
};

firebase.initializeApp(firebaseConfig)

  export default firebase;