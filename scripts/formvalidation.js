const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm-password");
const feedback = document.querySelector("#feedback");

// Matching passwords
password2.addEventListener("focusout", checkSame);
function checkSame() {
    if (password1.value !== password2.value) {
        feedback.textContent = "Your passwords do not match. ";
        password2.setCustomValidity("Your passwords do not match. ");
    } else {
        feedback.textContent = "";
        password2.setCustomValidity("");
    }
}

// Rating slider display
const rangevalue = document.querySelector("#rangevalue");
const range = document.querySelector("#rating");
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}