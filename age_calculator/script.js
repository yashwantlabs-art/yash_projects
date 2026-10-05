function calculateAge() {

    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dobInput) {
        result.innerHTML = "Please select your date of birth.";
        return;
    }

    const dob = new Date(dobInput);
    const today = new Date();

    if (dob > today) {
        result.innerHTML = "Date of birth cannot be in the future.";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    if (days < 0) {
        months--;

        const previousMonth = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        );

        days += previousMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    result.innerHTML =
        `Your Age is:<br><br>
        ${years} Years, ${months} Months, ${days} Days`;
}
