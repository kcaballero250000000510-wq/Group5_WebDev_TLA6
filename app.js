// 1. Target DOM Nodes (Matching Slide 7)

const categoryNameInput = document.getElementById("txtCatName");
const categoryDescInput = document.getElementById("txtCatDesc");
const addCategoryBtn = document.getElementById("btnAdd");
const incomeTableBody = document.getElementById("listIncomeCat");

// added input elemts in the array for event handling (Kit modify start)
const inputs = [categoryNameInput, categoryDescInput]; 

// inline validation
function validateField(input) {
  if (input.value.trim() === "") {
    input.classList.add("is-invalid");
    input.classList.remove("is-valid");
    return false;
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return true;
  }
}

// Attached listeners
inputs.forEach((input) => {
  input.addEventListener("blur", () => validateField(input));

  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    }
  });
});
// (Kit modify end)



// 2. Attach Non-Inline Event Listener
addCategoryBtn.addEventListener("click", handleAddCategory);
// 3. Controller Action
function handleAddCategory() {
  const catName = categoryNameInput.value.trim();
  const catDesc = categoryDescInput.value.trim();
  // Guard Clause Validation
  if (!catName || !catDesc) {
    alert("Please complete both input fields.");
    return;
  }
  // Construct Row Markup
  const newRowHTML = `
<tr>
<td class="fw-semibold text-dark">${catName}</td>
<td class="text-secondary">${catDesc}</td>
</tr>
`;
  // Dynamic RAM Insertion
  incomeTableBody.insertAdjacentHTML("beforeend", newRowHTML);
  // Reset Inputs & Refocus
  categoryNameInput.value = "";
  categoryDescInput.value = "";
  categoryNameInput.focus();
}
