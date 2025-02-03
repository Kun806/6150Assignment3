window.onload = function () {
  const msg = "Kun Hu NUID:002060269";
  alert(`Hello, ${msg}!`);
};

let studentCount = 0;

document.getElementById("addStudent").addEventListener("click", function () {
  try {
    studentCount++;
    const table = document.getElementById("studentTable");
    const row = table.insertRow();

    const randomBudget = Math.floor(10000 + Math.random() * 90000); // Random budget

    row.innerHTML = `
      <td>
        <div class="checkbox-arrow">
          <button class="expand">▶</button>
          <input type="checkbox" class="selectStudent">
        </div>
      </td>
      <td>Student ${studentCount}</td>
      <td>Advisor ${studentCount}</td>
      <td>Approved</td>
      <td>Fall</td>
      <td>TA</td>
      <td>${randomBudget}</td>
      <td>100%</td>
      <td class="delete hidden"><button class="deleteBtn">Delete</button></td>
      <td class="edit hidden"><button class="editBtn">Edit</button></td>
    `;

    // Show the Delete and Edit columns after a student is added
    document
      .querySelectorAll(".delete-column, .edit-column")
      .forEach((col) => col.classList.remove("hidden"));

    // Success Message
    alert(`Student ${studentCount} Record added successfully`);
  } catch (error) {
    // In case of an error, show the error message
    alert("Failed to add student record. Please try again.");
  }
});

document
  .getElementById("studentTable")
  .addEventListener("change", function (e) {
    if (e.target.classList.contains("selectStudent")) {
      const row = e.target.closest("tr");
      row.classList.toggle("selected", e.target.checked);
      row
        .querySelector(".delete")
        .classList.toggle("hidden", !e.target.checked);
      row.querySelector(".edit").classList.toggle("hidden", !e.target.checked);

      // Check if any checkbox is selected
      const submitBtn = document.getElementById("submit");
      const anyChecked =
        document.querySelectorAll(".selectStudent:checked").length > 0;

      // Enable/Disable Submit button based on checkbox selection
      submitBtn.disabled = !anyChecked;
      if (anyChecked) {
        submitBtn.style.backgroundColor = "yellow"; // Change background to yellow when checked
        submitBtn.style.cursor = "pointer"; // Enable button when checked
      } else {
        submitBtn.style.backgroundColor = "gray"; // Change background to gray when unchecked
        submitBtn.style.cursor = "not-allowed"; // Disable button when unchecked
      }
    }
  });

document.getElementById("studentTable").addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    const row = e.target.closest("tr");
    alert(`${row.cells[1].innerText} Record deleted successfully`);
    row.remove();
  }
  if (e.target.classList.contains("editBtn")) {
    const row = e.target.closest("tr");
    alert(`Edit details of ${row.cells[1].innerText}`);
  }
  if (e.target.classList.contains("expand")) {
    e.target.innerText = e.target.innerText === "▶" ? "▼" : "▶"; // Toggle the arrow direction
  }
});
