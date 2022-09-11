let image = document.querySelector('.image');
let temperature = document.querySelector('.temperature');
let celcius = document.querySelector('.celcius');
let fahrenhiet = document.querySelector('.fahrenhiet');
let otherDetails = document.querySelectorAll('.other-details ul li');
let city = document.querySelector('.location-details h1');
let date = document.querySelectorAll('.location-details p');
//let response, information;


let location1 = document.querySelector('#input');
let searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', () => {
    gettingData(location1.value);
    location1.value = "";
});

async function gettingData(location){
    console.log(location)
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fb73e9659b364c268c4181724221009&q=${location}&aqi=yes`);            
    console.log(location)
    let information = await response.json();
    image.src = information.current.condition.icon;
    temperature.innerText = information.current.temp_c;
    otherDetails[0].innerText = `humidity: ${information.current.humidity}`;
    otherDetails[1].innerText = `wind: ${information.current.wind_kph} km/h`; 
    otherDetails[2].innerText = `cloud: ${information.current.cloud}`; 

    city.innerText = `${information.location.name}, ${information.location.region}`;
    date[0].innerText = `${information.location.localtime}`;
    date[1].innerText = `${information.current.condition.text}`;
}

function temperatureConversion(type){
    if(type == 'celcius'){
        temperature.innerHTML = information.current.temp_c;
    }else{
        temperature.innerHTML = information.current.temp_f;
    }
}

celcius.addEventListener('click', ()=>{
    celcius.classList.add('highlight');
    fahrenhiet.classList.remove('highlight');
    temperatureConversion('celcius');
})
fahrenhiet.addEventListener('click', ()=>{
    fahrenhiet.classList.add('highlight');
    celcius.classList.remove('highlight');
    temperatureConversion('fahrenhiet');
})

//gettingData('tumkur');


// setTimeout(myFunction, 5000);
// function myFunction(){
//     alert('Delhi weather')
//     gettingData('delhi');
// }




