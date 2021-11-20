const signupFormHandler = async function (e){
	e.preventDefault()

	const userInput = document.querySelector('#username-input');
	const passwordInput =  document.querySelector('#password-input');

	const response =  await fetch('/api/user', {
		method: 'POST', 
		body: JSON.stringify({
			username: userInput.value, 
			password: passwordInput.value
		}),
		headers: { 'Content-Type': 'application/json'}
	});

	if (response.ok){
		document.location.replace('/exercise/new')
	} else{
		alert('failed to sign up')
	}
};

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);