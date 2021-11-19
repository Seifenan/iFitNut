const signupFormHandler = async function (e){
	e.preventDefault()

	const userInput = document.querySelector('#username-input');
	const passwordInput =  document.querySelector('#password-input');

	fetch('/api/user', {
		method: 'POST', 
		body: JSON.stringify({
			username: userInput.value, 
			password: passwordInput.value
		}),
		headers: { 'Content-Type': 'application/json'}
	}).then(function() {
		console.log('Sucess')
		document.location.replace('/home')
	})

	// if (response.ok){
	// 	document.location.replace('/exercise')
	// } else{
	// 	alert('failed to sign up')
	// }
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);