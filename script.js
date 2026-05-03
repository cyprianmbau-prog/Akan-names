function getAkanName() {
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;

    if (!dateOfBirth) {
        alert("give birthdate.");
        return;
    }
    if (!gender) {
        alert("give your gender.");
        return;
    }

    const birhDate = new Date(dateOfBirth);
    if (isNaN(birthDate.getTime())) {
        alert("enter a valid date please.");
        return;
    }
    const day = birthDatedate.getDay();

    const maleNames = [
        "kwasi", "Kwadwo", "kwabena", "kwaku", "Yaw", "kofi", "Kwame"
    ];
    const femaleNames = [
        "Akoswa", "Adwoa", "Abenoa", "Akua", "Yaa", "Afua", "Ama"
    ];

    const akanName = gender === "male" ? maleNames[day] : femaleNames[day];
    const result = document.getElementById("result");
    result.innerHTML =
        `your akan name is <b>${akanName}</b>.<br>
        you were born on <b>${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][day]
        }</b>.
    } `;
}