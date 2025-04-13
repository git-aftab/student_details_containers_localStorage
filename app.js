// Dom elements
const studentForm = document.getElementById("student-form");
const studentDetails = document.querySelector(".students");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const rollInput = document.getElementById("roll");
const btn = document.getElementById("btn");

var students = [];

// Local Storage
const storedStudents = localStorage.getItem("students")
if(storedStudents){
    students = JSON.parse(storedStudents)
    displayElements()
}

// Fetchig input and pushing data to array onClick
btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    nameInput.value.trim() == "" ||
    ageInput.value.trim() == "" ||
    rollInput.value.trim() == ""
  ) {
    alert("Please fill all details");
  } else {
    students.push([nameInput.value, ageInput.value, rollInput.value]);
    localStorage.setItem("students",JSON.stringify(students))
    displayElements();
    console.log(students);
    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
  }
});

function displayElements() {
  studentDetails.innerHTML = "";
  students.forEach((student) => {
    // Create Elements
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("p");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");

    // fill the contents
    studentName.innerText = "Student Name : " + student[0];
    studentAge.innerText = "Student Age : " + student[1];
    studentRoll.innerText = "Student Roll : " + student[2];
    studentDiv.append(studentName);
    studentDiv.append(studentAge);
    studentDiv.append(studentRoll);

    // Display content
    studentDetails.appendChild(studentDiv);
    studentDetails.style.display = "block";
  });
}
