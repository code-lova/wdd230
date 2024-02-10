
//Script to show banner only on mondays, tuesdays, wednesdays
//and closing the banner with a button

const closeBtn = document.getElementById("close");
const displayBanner = document.querySelector(".parent7");

closeBtn.addEventListener("click", hideBanner)

function hideBanner(){
    displayBanner.style.display = "none";
}




// Get the current date
const currenDate = new Date();

// Get the day of the week as a number (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
const dayOfWeek = currenDate.getDay();

// Array to map day numbers to day names
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the day name corresponding to the day number
const currentDayOfWeek = daysOfWeek[dayOfWeek];

if(currentDayOfWeek === 'Monday'){

    displayBanner.style.display = "block";
}
else if(currentDayOfWeek === 'Tuesday'){

    displayBanner.style.display = "block";
}
else if(currentDayOfWeek === 'Wednesday'){
    
    displayBanner.style.display = "block";
}
else{
    displayBanner.style.display = "none";
    //console.log(`No today is ${currentDayOfWeek}`);

}
