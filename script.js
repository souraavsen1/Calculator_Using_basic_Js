var display = document.getElementById("output");

function buttonFunc(value) {
  if (value === "C") {
    display.innerText = "0";
  }
  else if (value === "%") {
    display.innerText = display.innerText / 100;
  } else if (value === "=") {
    try {
      display.innerText = eval(display.innerText);
    } catch {
      display.innerText = "Syntex Error";
    }
  } else if (value === "←") {
    if (display.innerText) {
      if (display.innerText === "Syntex Error") {
        display.innerText = display.innerText.slice(0, 0);
      } else {
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText === "") {
          display.innerText="0"
        }
      }
    } else {
      display.innerText = "0";
    }
  } else {
    if (display.innerText === "0") {
      display.innerText =  value;
      
    } else {
      display.innerText = display.innerText + value;
    }
  }
}


function abouti() {
  var ibutton = document.getElementById("myself");

  if (ibutton.style.display === "none") {
    ibutton.style.display = "block";
  } else {
    ibutton.style.display = "none";
  }

}
