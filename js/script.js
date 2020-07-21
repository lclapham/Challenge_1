
/////////////// Run application ///////////////////////
window.addEventListener('load', () => {

    window.alert("Hello World")
    
});

window.addEventListener('click', (e) => {
    console.log(e.target.id);
})

// document.getElementById('homer1').addEventListener('click', () => {
//     window.alert("You got it")
// });


// $('#deliveryAddress').change(function (e) {
//     validateUserInput(e.target.id, e.target.value)
//     console.log(e.target.id)
// })