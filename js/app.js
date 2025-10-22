const body = document.getElementsByTagName("body")[0];
const year = document.getElementById("year");
const navLinks = document.getElementById("navLinks");
const mobileNavToggler = document.getElementById("mobileNavToggler");

if (year) {
    let todaysDate = new Date();
    let currentYear = todaysDate.getFullYear();
    year.innerText = `${currentYear} `;
}

mobileNavToggler.addEventListener("click", () => {
    if (navLinks) {
        !navLinks.classList.contains("open") ? navLinks.classList.add("open") : navLinks.classList.remove("open");
    }
});
