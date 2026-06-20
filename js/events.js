// CLICK
const btnClick = document.getElementById("btnClick");
const clickResult = document.getElementById("clickResult");

btnClick.addEventListener("click", function () {
clickResult.textContent = "Bạn vừa bấm nút!";
});

// CHANGE
const colorSelect = document.getElementById("colorSelect");
const colorResult = document.getElementById("colorResult");

colorSelect.addEventListener("change", function () {
colorResult.style.color = colorSelect.value;
});

// KEYUP
const nameInput = document.getElementById("nameInput");
const previewName = document.getElementById("previewName");

nameInput.addEventListener("keyup", function () {
previewName.textContent = nameInput.value;
});

// SUBMIT
const myForm = document.getElementById("myForm");
const submitResult = document.getElementById("submitResult");

myForm.addEventListener("submit", function (event) {
event.preventDefault();
submitResult.textContent = "Form đã được gửi (đã chặn tải lại trang).";
});
