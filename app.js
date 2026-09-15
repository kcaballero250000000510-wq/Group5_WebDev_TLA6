const categoryNameInput = document.getElementById("txtCatName");
const categoryDescInput = document.getElementById("txtCatDesc");
const addCategoryBtn = document.getElementById("btnAdd");
const incomeTableBody = document.getElementById("listIncomeCat");
const feedbackBox = document.getElementById("loginFeedback");

addCategoryBtn.addEventListener("click", handleAddCategory);

function handleAddCategory() {
  const catName = categoryNameInput.value.trim();
  const catDesc = categoryDescInput.value.trim();

  if (!catName || !catDesc) {
    alert("Please complete both input fields.");
    feedbackBox.className = "alert alert-danger";
    feedbackBox.textContent = "Please complete both input fields.";
    return;
  }

  const newRowHTML = `
    <tr>
      <td class="fw-semibold text-dark">${catName}</td>
      <td class="text-secondary">${catDesc}</td>
    </tr>
  `;

  incomeTableBody.insertAdjacentHTML("beforeend", newRowHTML);

  feedbackBox.className = "alert alert-success";
  feedbackBox.textContent = "Category added successfully!";

  categoryNameInput.value = "";
  categoryDescInput.value = "";
  categoryNameInput.focus();
}
