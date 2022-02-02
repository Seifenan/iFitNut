const d = new Date();
var submitButton = $("#exerciseForm");

submitButton.on("submit", (e) => {
    e.preventDefault()
    const data = {
        date: d,
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
        }).then(() => document.location.replace('/exercise'))
})