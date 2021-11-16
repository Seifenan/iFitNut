var mainBody = document.querySelector('.mainBody');
var userSignIn = document.querySelector('.userSignin');
var userSignUp = document.querySelector('.userSignup');

var signinBtn = document.querySelector('.signinBtn');
var signupBtn = document.querySelector('.signupBtn');
var joinBtn = document.querySelector('.joinBtn');



function logIn() {
  mainBody.setAttribute('class', 'hide');
  userSignUp.setAttribute('class', 'hide');
  userSignIn.setAttribute('class', 'show');
}

function signUp() {
  mainBody.setAttribute('class', 'hide');
  userSignIn.setAttribute('class', 'hide');
  userSignUp.setAttribute('class', 'show');
}



signinBtn.addEventListener('click', logIn);

signupBtn.addEventListener('click', signUp);
joinBtn.addEventListener('click', signUp);



