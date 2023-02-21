var inputName = document.getElementById("recorderName");
 
if (inputName) var recorderName = inputName.value.replace(/(.{7})/g, "$1\n");
