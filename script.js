var boughtPrice = document.getElementById("price1");
var units = document.getElementById("units");
var currentPrice = document.getElementById("curr");
document.getElementById("btn").addEventListener("click", check);
var goodGIF = "./good.gif";
var badGIF = "./bad.gif";
var div = document.getElementById("gif");
var msg = document.getElementById("msg");

function check(e) {
  console.log(boughtPrice.value, " ", units.value, " ", currentPrice.value);
  e.preventDefault();
  //all the entered values should be greater than 0
  if (boughtPrice.value <= 0 || units.value <= 0 || currentPrice.value <= 0) {
    msg.innerHTML = "Please enter values greater than zero.";
    //div.style.backgroundImage = "none";
  }
  // if all values are above zero
  else {
    const profitLoss = (currentPrice.value - boughtPrice.value) * units.value; //profit amount 
    // it will be either profit amount or loss amount, as negetives also exists
    const profitLossPercentage = (
      (profitLoss / (boughtPrice.value * units.value)) *
      100
    ).toFixed(2); //profit percentage

    //loss
    if (profitLoss <= 0) {
      div.style.backgroundImage = `url(${badGIF})`;
      msg.innerHTML =
        "There's a " +
        `${profitLossPercentage}` +
        "% loss. You lost ₹ " +
        `${profitLoss}`;
      console.log("loss");
    } else {
      div.style.backgroundImage = `url(${goodGIF})`;
      msg.innerHTML =
        "There's a " +
        `${profitLossPercentage}` +
        "% profit. You gained ₹ " +
        `${profitLoss}`;
      console.log("profit");
    }
    div.style.backgroundRepeat = "no-repeat";
    div.style.height = "210px";
    div.style.backgroundSize = "cover";
  }
}
