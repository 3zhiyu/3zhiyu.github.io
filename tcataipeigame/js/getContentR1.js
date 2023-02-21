var inputR1 = document.getElementById("contentR1");
var inputR2 = document.getElementById("contentR2");

if (inputR1) var contentR1 = inputR1.value.replace(/(.{7})/g, "$1\n");
if (inputR2) var contentR2 = inputR2.value.replace(/(.{8})/g, "$1\n");
