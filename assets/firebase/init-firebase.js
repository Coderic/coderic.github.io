var firebaseConfig = {
    apiKey: "AIzaSyA21ZM0KXw_Ys8iwzIzuMcUN1u8YfMsy9M",
    authDomain: "coderic.firebaseapp.com",
    databaseURL: "https://coderic.firebaseio.com",
    projectId: "coderic",
    storageBucket: "coderic.appspot.com",
    messagingSenderId: "204370804567",
    appId: "1:204370804567:web:46b70244eb62efe59a0812"
};
var defaultProject = firebase.initializeApp(firebaseConfig);
console.log(defaultProject.name);
var defaultStorage = firebase.storage();
var defaultFirestore = firebase.firestore();
var uiConfig = {
    signInSuccessUrl: 'https://coderic.net/',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      'microsoft.com',
      //      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
//      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
//      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: 'https://coderic.net/terminos',
    privacyPolicyUrl: function() {
      window.location.assign('https://coderic.net/privacidad');
    }
  };
