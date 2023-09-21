const firebaseConfig = {
    apiKey: "AIzaSyBCXZymUy9xJ4uKwZIZQf1XznGx3g7u68g",
    authDomain: "shubhchintak-f11be.firebaseapp.com",
    projectId: "shubhchintak-f11be",
    storageBucket: "shubhchintak-f11be.appspot.com",
    messagingSenderId: "201815614610",
    appId: "1:201815614610:web:65428be0c8e5b25535b24b"
  };
  
  // Initialize Firebase
 // const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  
  



    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
