// Custom function
function calculateTip() {
  // Store the data of inputs
  var billAmount = document.getElementById("billAmount").value;
  var serviceQuality = document.getElementById("serviceQuality").value;
  var numPeople = document.getElementById("totalPeople").value;

  console.log(billAmount + " " + serviceQuality + " " + numPeople);

  // Quick Validation
  if (billAmount === "" || serviceQuality == 0) {
    // window.alert("please enter some values");
    return; // This will prevent the funciton from continuing
  }

  // Check to see if this input is empty or less than or equal to 1.

  if (numPeople == "" || numPeople <= 1) {
    numPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  // Math
  var total = (billAmount * serviceQuality) / numPeople;
  // rounding decimal places
  total = Math.round(total * 100) / 100;
  // Make sure decimal places has two digits
  total = total.toFixed(2);

  // Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

// Hide the tip amount
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// Clicking the button calls our custom function
document.getElementById("calculator").onclick = function() {
  calculateTip();
};
