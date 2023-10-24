// Contact form

const name =document.getElementById('name')
const email =document.getElementById('email')
const message =document.getElementById('message')
const submit =document.getElementsByClassName('formContact')[0];

// Add event listener on form container

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("clicked");


// write html for proper format to be sent in mail


let ebody = `
    <b>Name: </b>${name.value}
      <br>
      <b>Email: </b>${email.value}
      <br>
      <b>Message: </b>${message.value}
      <br>
`



    // Email Code here
    // 55D1479D77027FF2897BAF0E60757229FA30
    // e75b7049-97aa-41fb-8cf7-97a450e37832

    Email.send({
        SecureToken : "e75b7049-97aa-41fb-8cf7-97a450e37832",
        To : 'kortniskikiskookies@gmail.com',
        From : "kortniskikiskookies@gmail.com",
        Subject : "Kiki's Kookies from " + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
});


// JavaScript for Auto picture slide

let counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
counter++;
if(counter > 6){
    counter = 1;
}
},5000);