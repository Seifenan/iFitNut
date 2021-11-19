const loginFormHandler = async function (e){
	e.preventDefault()

	const userInput = document.querySelector('#login-username-input').value;
	const passwordInput = document.querySelector('#login-password-input').value;



	const response =  await fetch('/api/user/login', {
		method: 'POST', 
		body: JSON.stringify({
			username: userInput,
			password: passwordInput
		}),
		headers: { 'Content-Type': 'application/json'}
	});

	if (response.ok){
	 document.location.replace('/exercise')
	} else{
		alert('failed to login')
	}
};

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);