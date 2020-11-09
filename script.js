const inputBox = document.getElementById("strings");
const submitForm = document.getElementById("submission");
const stringForm = document.getElementById("text-box");
const output = document.getElementById("output");

submission.addEventListener("click", function (event) {
  event.preventDefault();
  let changeMeStr = inputBox.value;
  let changeMeArr = changeMeStr.split("");
  let string = "hey";

  output.appendChild(string);
});
