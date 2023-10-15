const d = new Date();
document.getElementById("lastModified").innerHTML = d;

const hamburger = document.querySelector(".hamburger");
const navul = document.querySelector(".navul");

hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navul.classList.toggle("active");
})

document.querySelectorAll(".navlink").forEach(n =>n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navul.classList.remove("active");
}))