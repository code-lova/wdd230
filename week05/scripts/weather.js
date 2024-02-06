//declearing varables to be used 
const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");


let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64";
let apiKey = "dfb9af55f4b2734878203a9ee744d880";
let unit = "&units=imperial";


const displayResults = (data) => {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', `weather icon of ${data.name}`); 
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('width', '100');
    weatherIcon.setAttribute('height', '100');
    let desc = data.weather[0].description;
    captionDesc.textContent = `There will be ${desc} today.`;
}




const apiFetch = async() =>{
    try{
        const response = await fetch(apiUrl + `&appid=${apiKey}` + unit)
        if(response.ok)
        {
            const data = await response.json();
            //console.log(data);
            displayResults(data)
        }else{
            throw Error(await response.text());
        }

    }
    catch(error)
    {
        console.log(error);
    }
}

apiFetch();