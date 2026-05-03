function getAkanName() {
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const gender = document.querySelector("input[name='gender']:checked");
    If(!dateOfBirth || !gender){
        alert("give birthdate and select your gender.");
        return;
    }
    const date = new Date(dateOfBirth);
    const day = date.getDay();
    const maleNames = [
        "kwasi", "Kwadwo", "kwabena", "kwaku", "Yaw", "kofi", "Kwame"
    ];
    const femaleNames = [
        "Akoswa", "Adwoa", "Abenoa", "Akua", "Yaa", "Afua", "Ama"
    ];
    let akanName;
    const dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    if (gender.value === "male") {
        akanName = maleNames[day];
    } else {
        akanName = femaleNames[day];
    }
    document.getElementById("result").innerHTML =
        `your akan name is <b>${akanName}</b>.<br>
        you were born on <b>${dayNames[day]}</b>.`;
}