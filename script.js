function validateNumber() {
    const inputString = document.getElementById("inputString").value;
    const scientificNumberRegex = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;
    const isValid = scientificNumberRegex.test(inputString);
    const message = document.getElementById("message");
  
    if (isValid) {
      message.textContent = "Yes, it is a number";
      message.style.color = "blue";
    } else {
      message.textContent = "No, it is not a number";
      message.style.color = "red";
    }
  }
