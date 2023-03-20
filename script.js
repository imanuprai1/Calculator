
function storeData(v) {
  let txtInput = document.getElementById("txtValue");
  let oldValue = txtInput.value;
  let t = oldValue.length;
  let lastChr = oldValue[t - 1];
  txtInput.value = oldValue + v;
  let oprSym = ["+", "-", "*", "/", "."];
  if (oprSym.includes(v)) {
    if (oprSym.includes(lastChr)) {
      let removeLast = oldValue.slice(0, -1);
      txtInput.value = removeLast + v;
    } else {
      txtInput.value = oldValue + v;
    }
  } else {
    txtInput.value = oldValue + v;
  }
}

function calData() {
  let txtInput = document.getElementById("txtValue");
  let oldValue = eval(txtInput.value);
  txtInput.value = oldValue;
}

function clearData() {
  document.getElementById("txtValue").value = "";
}


// method - 2
/*
let unknown = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach( (button) =>{
    button.addEventListener("click", (e) =>{
        if(e.target.innerHTML == "=") {
            unknown = eval(unknown);
            document.querySelector("input").value = unknown;
        }else if(e.target.innerHTML == "C") {
            unknown = "";
            document.querySelector("input").value = unknown;
        }else{
            console.log(e.target)
            unknown = unknown + e.target.innerHTML;
            document.querySelector("input").value = unknown;
        }
    })
}) */

// method - 2.1
/*
let unknown = "";
let buttons = document.querySelectorAll("button");

function calculate(str) {
  return new Function("return " + str)();
}

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      unknown = calculate(unknown);
      document.querySelector("input").value = unknown;
    } else if (e.target.innerHTML == "C") {
      unknown = "";
      document.querySelector("input").value = unknown;
    } else {
      console.log(e.target);
      unknown = unknown + e.target.innerHTML;
      document.querySelector("input").value = unknown;
    }
  });
}); 
*/