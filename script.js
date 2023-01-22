const text = document.getElementById("text");
const letter = document.getElementById("letter");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", remainingText);

function remainingText() {
  console.log("hello");
  console.log(text.value);
  console.log(letter.value);
  for (let i = 0; i < text.value.length; i++) {
    if (text.value.charAt(i) == letter.value) {
      result.innerHTML = text.value.substring(i + 1, text.value.length);
      break;
    } else {
      result.innerHTML = "The letter does not exist in the sentence";
    }
  }
  console.log(result.innerHTML);
}
