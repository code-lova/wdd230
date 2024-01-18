//For hamburger menu 

const hamMenuBtn = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamMenuBtn.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamMenuBtn.classList.toggle("show");
});



// toggling dark mode for website

const modeBtn = document.querySelector("#mode");
const main = document.querySelector("main");

modeBtn.addEventListener("click", () => {
	if (modeBtn.textContent.includes("Dark🌚")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeBtn.textContent = "Light🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
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







