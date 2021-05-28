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
var defaultStorage = firebase.storage();
var defaultFirestore = firebase.firestore();
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  signInSuccessUrl: 'https://coderic.net/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    'microsoft.com',
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    //      firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: 'https://coderic.net/terminos',
  privacyPolicyUrl: function () {
    window.location.assign('https://coderic.net/privacidad');
  }
};
initApp = function () {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var uid = user.uid;
      var phoneNumber = user.phoneNumber;
      var providerData = user.providerData;
      user.getIdToken().then(function (accessToken) {
        console.dir({
          'sign-in-status': 'Signed in',
          'sign-in': 'Sign out',
          'account-details': {
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            phoneNumber: phoneNumber,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }
        });
      });
    } else {
      // User is signed out.
      console.dir({
        'sign-in-status': 'Signed out',
        'sign-in': 'Sign in',
        'account-details': 'null'
      });
    }
  }, function (error) {
    console.log(error);
  });
};

window.addEventListener('load', function () {
  initApp()
});