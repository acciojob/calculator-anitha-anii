let output = document.getElementById('input');
let clearButton = document.getElementById('clr');

clearButton.addEventListener('click', function() {
  output.value ="";
});
// let output = document.getElementById('input');
let allbuttons = document.querySelectorAll('button');
// let clearbutton = document.getElementById('clear');



for (let i = 0; i < allbuttons.length; i++) {
  allbuttons[i].addEventListener('click', function() {
    if (this.innerHTML === "=") {
      try {
        output.value = eval(output.value);
      } catch (error) {
        output.value = "Error";
      }
    } else if (this.innerHTML === "clr") {
      output.value = "";
    } else {
      output.value += this.innerHTML;
    }

    // Handle division by zero and zero divided by zero
    if (
      this.innerHTML === "/" &&
      (output.value.endsWith("/0") || output.value.endsWith("/ 0"))
    ) {
      output.value = "Infinity";
    } else if (output.value === "0/0") {
      output.value = "NaN";
    }
  });
	

}


