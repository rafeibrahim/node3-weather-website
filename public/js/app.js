'use strict'


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

//e means event
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault(); //told the browser to not referesh the page
    const location = search.value;
    console.log(location);
    
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    const url = 'http://localhost:3000/weather?address=';
    fetch(url + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            //console.log(data.error);
            messageOne.textContent = data.error;
        } else{
            console.log(data.location);
            messageOne.textContent = data.location;
            
            console.log(data.forecast);
            messageTwo.textContent = data.forecast;
        }
        
    });
});

});
