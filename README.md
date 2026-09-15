# Income Category Registration – Group 5

## Project Description

This project is an Income Category Registration system created as part of the DOM Manipulation laboratory activity.

Our group is assigned to **Group 5: Inline Contextual Validation**.

The project allows users to enter an income category name and description. When the user clicks the **Save Category** button, the information is added dynamically to the Registered Categories table.

The project also provides feedback when the input fields are incomplete.

---

## Group Challenge

### Group 5 – Inline Contextual Validation

Our assigned challenge is to replace the use of browser `alert()` popups with inline visual feedback.

The system checks whether both the **Category Name** and **Description** fields contain text.

If either field is empty:

- The category will not be added.
- An error message is displayed inside the page.
- The feedback uses Bootstrap's danger alert styling.

If both fields are completed:

- The category is added to the table.
- A success message is displayed.
- The input fields are cleared.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- DOM Manipulation

---

## DOM Concepts Applied

### 1. DOM Element Selection

JavaScript uses `getElementById()` to access the input fields, button, table body, and feedback area.

```javascript
const categoryNameInput = document.getElementById("txtCatName");
const categoryDescInput = document.getElementById("txtCatDesc");
const addCategoryBtn = document.getElementById("btnAdd");
const incomeTableBody = document.getElementById("listIncomeCat");
const feedbackBox = document.getElementById("loginFeedback");
