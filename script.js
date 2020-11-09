const inputBox = document.getElementById("strings");
const submitForm = document.getElementById("submission");
const stringForm = document.getElementById("text-box");
const output = document.getElementById("output");

submission.addEventListener("click", function (event) {
  event.preventDefault();
  let changeMeStr = inputBox.value;
  let changeMeArr = changeMeStr.split("");
  console.log("before: " + changeMeArr);
  for (let i = 0; i < changeMeArr.length; i++) {
    let chance = Math.floor(Math.random() * 2);
    if (chance === 0) {
      changeMeArr[i] = changeMeArr[i].toLowerCase();
    } else {
      changeMeArr[i] = changeMeArr[i].toUpperCase();
    }
  }
  console.log("after: " + changeMeArr);
  let string = changeMeArr.join("");
  let paragraph = document.createElement("p");
  paragraph.textContent = string;

  output.appendChild(paragraph);
});
