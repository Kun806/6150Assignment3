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

      // 检查是否有任何复选框被选中
      const submitBtn = document.getElementById("submit");
      const anyChecked =
        document.querySelectorAll(".selectStudent:checked").length > 0;

      // 根据复选框选择状态启用/禁用 Submit 按钮
      submitBtn.disabled = !anyChecked;
      if (anyChecked) {
        submitBtn.style.backgroundColor = "yellow"; // 选中时背景变为黄色
        submitBtn.style.cursor = "pointer"; // 启用按钮时可点击
      } else {
        submitBtn.style.backgroundColor = "gray"; // 未选中时背景为灰色
        submitBtn.style.cursor = "not-allowed"; // 禁用时不可点击
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
    e.target.innerText = e.target.innerText === "▶" ? "▼" : "▶";
  }
});
