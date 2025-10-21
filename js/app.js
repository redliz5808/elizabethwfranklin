const body = document.getElementsByTagName("body")[0];
const year = document.getElementById("year");

if (year) {
    let todaysDate = new Date();
    let currentYear = todaysDate.getFullYear();
    year.innerText = `${currentYear} `;
}