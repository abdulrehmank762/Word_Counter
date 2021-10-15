const textarea = document.getElementById("text");
const wordCount = document.getElementById("wordCount");
const btn = document.getElementById("clearBtn");

function countWord() {
  let text = textarea.value;
  text = text.trim();
  text = text.replace(/ +(?= )/g,'');
  const words = text.split(" ");
  if (words[0] === "") {
    wordCount.innerText = 0;
  } else {
    wordCount.innerText = words.length;
  }
}
function cleartext(){
  console.log("hello");
  textarea.value= "";
  countWord();
}
