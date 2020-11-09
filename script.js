const inputBox = document.getElementById("strings");
const submitForm = document.getElementById("submission");
const stringForm = document.getElementById("text-box");
const output = document.getElementById("output");

submission.addEventListener("click", function (event) {
  event.preventDefault();
  let changeMeStr = inputBox.value;
  let changeMeArr = changeMeStr.toLowerCase().split("");

  let upperCounter = 0;
  let lowerCounter = 0;
  for (let i = 1; i < changeMeArr.length; i++) {
    if (changeMeArr[i] === "l" && changeMeArr[i + 1] === "l") {
      changeMeArr[i] = "L";
      i += 2;
    } else {
      let chance = Math.floor(Math.random() * 2);
      if (chance === 0 && upperCounter < 3) {
        changeMeArr[i] = changeMeArr[i].toUpperCase();
        upperCounter++;
        lowerCounter = 0;
      } else if (chance === 0 && lowerCounter < 3) {
        changeMeArr[i] = changeMeArr[i].toLowerCase();
        lowerCounter++;
        upperCounter = 0;
      }
    }
  }

  let string = changeMeArr.join("");
  let paragraph = document.createElement("p");
  paragraph.textContent = string;

  output.appendChild(paragraph);
  inputBox.value = "";
});
