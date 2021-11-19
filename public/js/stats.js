//add click listener on submit value
//grab all values
//save and then send as an object
//send post request here to the server.
//
console.log('Imhere')
const id = 1;//just using a fixed value for user ID
const d = new Date();
var submitButton = $("#submit");

submitButton.on("click", (e) => {
    e.preventDefault()
    const data = {
        id: 1,
        date: d,
        height: $("#heightSubmit").val().trim(),
        weight: $("#weightSubmit").val().trim(),
        pushups: $("#pushupsSubmit").val().trim(),
        situps: $("#situpsSubmit").val().trim(),
        pullups: $("#pullupsSubmit").val().trim(),
        runtime: $("#runtimeSubmit").val().trim()
    }
    // send post request with those values as an object
    fetch("/api/exercise", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
        console.log(data)
        })
})