const rangevalue = document.getElementById("rangevalue");
const rating = document.getElementById("rating");



// RATING event listener
rating.addEventListener('change', displayRatingValue);
rating.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = rating.value;
}




const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const error = document.querySelector("#error");

cpassword.addEventListener("focusout", verifyPassword);

// This should be refactored.
function verifyPassword() {
	if (password.value !== cpassword.value) {
		error.textContent = "❗Password DO NOT MATCH!";
		error.style.visibility = "block";
		cpassword.style.backgroundColor = "#fff0f3";
		cpassword.value = "";
		cpassword.focus();
	} else {
		error.style.display = "none";
		cpassword.style.backgroundColor = "#fff";
		cpassword.style.color = "#000";
	}
}
