// Custom function
function calculateTip() {
  // Store the data of inputs
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;

  console.log(billAmount + " " + serviceQuality + " " + numPeople);

  // Quick Validation
  if (billAmount === "" || serviceQuality == 0) {
    window.alert("please enter some values");
    return;
  }
}

// Hide the tip amount
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculator").onclick = function() {
  calculateTip();
};
