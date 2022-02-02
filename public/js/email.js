const emailBtn = document.querySelector('#emailButton');

const handleEmailSend = function () {

    const userEmail = document.querySelector('input[name="username"]').value
    const to = userEmail
    console.log(to)

    fetch('/api/send', {
        method: 'POST',
        body: JSON.stringify({
            to: to,
        }),
        headers: { "Content-Type": "application/json" }
    })

    alert('email is sent')
}

emailBtn.addEventListener('click', handleEmailSend)