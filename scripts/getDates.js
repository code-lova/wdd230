//For hamburger menu 

const hamMenuBtn = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamMenuBtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamMenuBtn.classList.toggle("show");
});


//Page number of visits 
const displayVisits = document.querySelector("#visits");

// Get the stored VALUE for the visitList KEY in localStorage if it exists. 
// If the numVisits KEY is missing, then assign 0 to the visitNum variable.
let visitNum = Number(window.localStorage.getItem("visitList")) || 0;


// Determine if this is the first visit or display the number of visits. 
if(visitNum === 0) {
    displayVisits.textContent = `This is your first visit. Welcome🤩`;
}else{
    displayVisits.textContent = `Number of Visits: ${visitNum}`;
}

// increment the number of visits by one.
visitNum++;

// store the new visit total into localStorage, key=visitList
localStorage.setItem("visitList", visitNum);




// toggling dark mode for website

const modeBtn = document.querySelector("#mode");
const main = document.querySelector("main");
const heading = document.querySelector("h1");
const herolabelBg = document.querySelector(".herolabel");


modeBtn.addEventListener("click", () => {
	if (modeBtn.textContent.includes("Dark🌚")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        heading.style.color = "#fff";
        herolabelBg.style.background = "rgb(59, 87, 59)";
		modeBtn.textContent = "Light🔆";
	} else {
		main.style.background = "#fff";
		main.style.color = "#000";
        heading.style.color = "rgb(59, 87, 59)";
        herolabelBg.style.background = "radial-gradient(#fff, #95a395)";
		modeBtn.textContent = "Dark🌚";
	}
});



//javascript to get date and time of modification
const getYear = document.querySelector("#year");

const option = {year: 'numeric'};

getYear.textContent = new Date().getFullYear();


const lastMod = document.querySelector("#lastModified");

function lastMode(mod){
    mod = formatDate(new Date(document.lastModified));
    return mod;
}


function formatDate(date) {
    var day = ('0' + date.getDate()).slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();
    var hours = ('0' + date.getHours()).slice(-2);
    var minutes = ('0' + date.getMinutes()).slice(-2);
    var seconds = ('0' + date.getSeconds()).slice(-2);

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

lastMod.textContent = `Last Modification: ${lastMode()}`;




//Weather Api from OpenWeathermap.org to display 
//current weather

const weatherCondition = document.querySelector("#weather-condition");
const weatherIcon = document.querySelector("#weather-icon");
const temp = document.querySelector("#temp");



let apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=6.34&lon=5.59";
let apiKey = "dfb9af55f4b2734878203a9ee744d880";
let unit = "&units=imperial";


const showData = (data) =>{

    weatherCondition.innerHTML = `- ${data.weather[0].description}`;
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', `weather image of ${data.name}`); 
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('width', '90');
    weatherIcon.setAttribute('height', '40');
    temp.innerHTML = `${data.main.temp}&deg;F`;

}




//Async function 
const getWeatherData = async() =>{
    try{
        const response = await fetch(apiUrl + `&appid=${apiKey}` + unit)
        if(response.ok)
        {
            const data = await response.json();
            console.log(data);
            showData(data)
        }else{
            throw Error(await response.text());
        }

    }
    catch(error)
    {
        console.log(error);
    }
}

getWeatherData();






