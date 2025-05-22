document.getElementById("studentForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const student = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    course: document.getElementById("course").value,
  };

  fetch("/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then(response => {
      if (response.ok) {
        document.getElementById("message").textContent = "Student added successfully!";
        document.getElementById("studentForm").reset();
      } else {
        throw new Error("Failed to add student.");
      }
    })
    .catch(error => {
      document.getElementById("message").textContent = error.message;
    });
});
