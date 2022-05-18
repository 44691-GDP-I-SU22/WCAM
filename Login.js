// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
// import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//         apiKey: "AIzaSyDKYUg4T2ezXOd58OUBnqtuHBaIHmMwit8",
//         authDomain: "wellnessauth.firebaseapp.com",
//         databaseURL: "https://wellnessauth-default-rtdb.firebaseio.com",
//         projectId: "wellnessauth",
//         storageBucket: "wellnessauth.appspot.com",
//         messagingSenderId: "945355011115",
//         appId: "1:945355011115:web:f3b89cef9fbaa3f8f6666e"
//       };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const auth = getAuth();

// // sighUp.addEventListener('click',(e) => {

// //   var email = document.getElementById('email').value;
// //   var password = document.getElementById('password').value;
// //   var username = document.getElementById('username').value;

// //   createUserWithEmailAndPassword(auth, email, password)
// //     .then((userCredential) => {
// //      // Signed in 
// //       const user = userCredential.user;

// //       set(ref(database, 'users/' + user.uid),{
// //           username: username,
// //           email: email
// //       })

// //       alert('user created!');
// //       // ...
// //     })
// //     .catch((error) => {
// //       const errorCode = error.code;
// //       const errorMessage = error.message;

// //       alert(errorMessage);
// //     // ..
// //     });

// // });

// login.addEventListener('click',(e)=>{
//  var email = document.getElementById('email').value;
//  var password = document.getElementById('password').value;

//     signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;

//       const dt = new Date();
//        update(ref(database, 'users/' + user.uid),{
//         last_login: dt,
//       })

//        alert('User loged in!');
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       alert(errorMessage);
// });

// });

// // const user = auth.currentUser;
// // onAuthStateChanged(auth, (user) => {
// // if (user) {
// //   // User is signed in, see docs for a list of available properties
// //   // https://firebase.google.com/docs/reference/js/firebase.User
// //   const uid = user.uid;
// //   //bla bla bla
// //   // ...
// // } else {
// //   // User is signed out
// //   // ...
// //   //bla bla bla
// // }
// // });