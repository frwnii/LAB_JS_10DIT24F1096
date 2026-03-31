console.clear();
console.log("✅ script.js connected");

const nameInput = document.getElementById("studentName");
const pw1Input = document.getElementById("pw1");
const pw2Input = document.getElementById("pw2");
const btn = document.getElementById("btnCalc");
const outputBox = document.getElementById("outputBox");

function calculateMarks() {
    let name = nameInput.value.trim();
    let pw1 = Number(pw1Input.value);
    let pw2 = Number(pw2Input.value);

    if (!name || isNaN(pw1) || isNaN(pw2) || pw1 < 0 || pw1 > 100 || pw2 < 0 || pw2 > 100) {
        outputBox.className = "alert alert-danger mt-3 mb-0";
        outputBox.innerHTML = "❌ Please enter a name and valid marks (0-100) for PW1 and PW2.";
        return;
    }

    let total = pw1 + pw2;
    let average = total / 2;
    let percentage = (total / 200) * 100;

    let grade;
    if (average >= 80) {
        grade = "Excellent";
    } else if (average >= 60) {
        grade = "Good";
    } else if (average >= 40) {
        grade = "Satisfactory";
    } else {
        grade = "Fail";
    }

    outputBox.className = "alert alert-success mt-3 mb-0";
    outputBox.innerHTML = `
        ✅ <strong>Result Summary</strong><br><br>
        Name: ${name}<br>
        PW1: ${pw1} / 100<br>
        PW2: ${pw2} / 100<br><hr>
        Total: ${total} / 200<br>
        Average: ${average.toFixed(2)} / 100<br>
        Percentage: ${percentage.toFixed(2)}%<br>
        Grade: ${grade}
    `;
}

btn.addEventListener("click", function () {
    calculateMarks();
});