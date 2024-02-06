//For hamburger menu 

const hamMenuBtn = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamMenuBtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamMenuBtn.classList.toggle("show");
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



//Using localStorage to store the latest visit date by the client
const visitMessageElement = document.getElementById("visit-message");

// Get the current date
const currentDate = new Date();

// Retrieve the last visit date from localStorage
const lastVisitDate = localStorage.getItem("lastVisitDate");

if (!lastVisitDate) {
    // First visit
    visitMessageElement.textContent = "Welcome! Let us know if you have any questions.";
} else {
    // Calculate the time between visits
    const timeDifference = currentDate - new Date(lastVisitDate);
    const daysBetweenVisits = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysBetweenVisits < 1) {
        // Less than a day
        visitMessageElement.textContent = "Back so soon! Awesome!";
    } else {
        // More than a day
        const daysText = daysBetweenVisits === 1 ? "day" : "days";
        visitMessageElement.textContent = `You last visited ${daysBetweenVisits} ${daysText} ago.`;
    }
}

// Store the current date as the last visit date in localStorage
localStorage.setItem("lastVisitDate", currentDate.toISOString());





//Time stap for membership area to show when the form was loaded by the user
window.onload = function () {
   
    // Set the value of the hidden field
    document.getElementById("timestamp").value = timeStamp();
    console.log(timeStamp())
};

function timeStamp(mod){
    mod = formatDate(new Date());
    return mod;
}



//Script to toggle between grid and list style in directory page
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".mcard1");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
