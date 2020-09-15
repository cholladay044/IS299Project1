
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQlpe1T93vyMFNMdXrqFLfZgoYHkgUuxs",
    authDomain: "projecta1-7cb03.firebaseapp.com",
    databaseURL: "https://projecta1-7cb03.firebaseio.com",
    projectId: "projecta1-7cb03",
    storageBucket: "projecta1-7cb03.appspot.com",
    messagingSenderId: "1083026938013",
    appId: "1:1083026938013:web:ac4d16495175bd8962dc74"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    alert("You Have Been Signed Up (If acceptable information)");
    window.location.href = "https://securewebsite20.threereddots.repl.co/";
  }
  
  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));
    promise.catch(e => window.location.href = "https://securewebsite20.threereddots.repl.co");
    
  }

   auth.onAuthStateChanged(function(user){
    if(user){
      window.location.href = "https://securewebsite20.threereddots.repl.co/welcome.html";
    }else{  
    }
    });
