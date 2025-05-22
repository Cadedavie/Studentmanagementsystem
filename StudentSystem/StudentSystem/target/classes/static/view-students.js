function loadStudent(rollNo) {
  fetch(`/students/${rollNo}`)
    .then(response => response.json())
    .then(student => {
      document.getElementById("editRollNo").value = student.rollNo;
      document.getElementById("editName").value = student.name;
      document.getElementById("editPercentage").value = student.percentage;
      document.getElementById("editBranch").value = student.branch;
      document.getElementById("editForm").style.display = "block";
    })
    .catch(error => console.error("Error loading student:", error));
}

document.getElementById("editForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const rollNo = document.getElementById("editRollNo").value;
  const updatedStudent = {
    name: document.getElementById("editName").value,
    percentage: parseFloat(document.getElementById("editPercentage").value),
    branch: document.getElementById("editBranch").value
  };

  fetch(`/students/${rollNo}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedStudent),
  })
    .then(response => {
      if (response.ok) {
        alert("Student updated successfully!");
        location.reload();
      } else {
        alert("Failed to update student.");
      }
    })
    .catch(error => console.error("Error updating student:", error));
});
