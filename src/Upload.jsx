import React from 'react';
import firebase from 'firebase';

const initializeFirebase = () => {
      // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBRzN6dZsKp6ys4orEljbAlnFi_wBbDeRE",
    authDomain: "file-upload-test-9ef22.firebaseapp.com",
    databaseURL: "https://file-upload-test-9ef22.firebaseio.com",
    projectId: "file-upload-test-9ef22",
    storageBucket: "file-upload-test-9ef22.appspot.com",
    messagingSenderId: "21163136082",
    appId: "1:21163136082:web:4c7157925daa078f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export const uploadFileToFirebase = (image) => {
  initializeFirebase();
  const storage = firebase.storage();
  const storageRef = storage.ref();
  const petImageRef = storageRef.child('images/9038453845903845/' + image.target.files[0].name);
  debugger;
  petImageRef.put(image.target.files[0]).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
});
}