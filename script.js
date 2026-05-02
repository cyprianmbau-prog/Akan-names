function findAkanName() {
    const dateInput = document.findElementById("birthdate").value;
    const gender =
        document.querySelector("input[name="gender"]:checked");
    If(!dateInput//!gender){
        alert("give birthdate and select your gender.");
    return;
}
const date = newDate(dateInput);
const day = date.getDay();
const maleNames = [
    "kwasi",//sunday
    "Kwadwo",//monday
    "kwabena",//tuesday
]
}