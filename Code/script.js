// Getting display
let display = document.querySelector(".display");

//Getting current key
let currentKey = document.querySelector(".currentKey");

// Getting all keys
keys = document.querySelectorAll(".key");

// Adding event listner to each key
keys.forEach((key) => {
  key.addEventListener("click", () => {
    doCalculate(key);
  });
});

//Doing operation
function doCalculate(key) {
  let value = key.dataset.value;

  if (
    (value == "ac" ||
      value == "p" ||
      value == "%" ||
      value == "/" ||
      value == "*" ||
      value == "+" ||
      value == "=") &&
    display.innerText == ""
  ) {
    return;
  } else if (
    (value == "%" ||
      value == "/" ||
      value == "*" ||
      value == "-" ||
      value == "+" ||
      value == ".") &&
    (display.innerText.slice(-1) == "%" ||
      display.innerText.slice(-1) == "/" ||
      display.innerText.slice(-1) == "*" ||
      display.innerText.slice(-1) == "-" ||
      display.innerText.slice(-1) == "+" ||
      display.innerText.slice(-1) == ".")
  ) {
    if (display.innerText == "-") {
      return;
    }
    display.innerText = display.innerText.slice(0, -1) + value;
    currentKey.innerText = value;
  } else if (value == "." && display.innerText == "") {
    display.innerText = "0.";
    currentKey.innerText = ".";
  } else if (value == "ac") {
    display.innerText = "";
    currentKey.innerText = "";
  } else if (value == "p") {
    display.innerText = display.innerText.slice(0, -1);
    currentKey.innerText = "";
  } else if (value == "=") {

    if (display.innerText.slice(-1) == "%" || display.innerText.slice(-1) == "/" || display.innerText.slice(-1) == "*" || display.innerText.slice(-1) == "-" || display.innerText.slice(-1) == "+" || display.innerText.slice(-1) == ".")
    {
    display.innerText = "Undefined";
    currentKey.innerText = "";  
    }


    display.innerText = eval(display.innerText);
    currentKey.innerText = "";
  } else {
    display.innerText += value;
    currentKey.innerText = value;
  }
}
