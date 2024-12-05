const btn = document.getElementById("btn");
const card = document.getElementById("card");
const cardDiv = document.getElementById("cardDiv");
const closeModal = document.getElementById("closeModal");
const dropDown = document.querySelector(".dropDown");
const nToD = document.querySelector(".nToD");
const dToN = document.querySelector(".dToN");

// Toggle between currency sections
dropDown.addEventListener("change", (e) => {
  if (e.target.value === "Naira to Dollar") {
    nToD.classList.remove("hide");
    dToN.classList.add("hide");
  } else if (e.target.value === "Dollar to Naira") {
    dToN.classList.remove("hide");
    nToD.classList.add("hide");
  }
});

// Currency conversion logic
const naira = document.querySelector("#nairaInput");
const nairaResult = document.querySelector("#nairaResult");
const dollar = document.querySelector("#dollarInput");
const dollarResult = document.querySelector("#dollarResult");
const dollarerror = document.querySelector("#dollarerror");

naira.addEventListener("input", (e) => {
  const value = e.target.value;
  if (isValidNumber(value)) {
    hideError();
    displayDollarResult(value);
  } else {
    displayError("Values must contain a letter");
  }
});

dollar.addEventListener("input", (e) => {
  const value = e.target.value;
  if (isValidNumber(value)) {
    hideError();
    displayNairaResult(value);
  } else {
    displayError("Values must contain a letter");
  }
});

// Function to check if the value is a valid number
function isValidNumber(value) {
  return /^\d*\.?\d*$/.test(value); // Allow numbers with optional decimal points
}

function displayDollarResult(value) {
  // let value = naira.value;
  dollarResult.value = Math.floor(value / 1750).toFixed(1);
}

function displayNairaResult(value) {
  // let value = dollar.value;
  nairaResult.value = Math.floor(value * 1750).toFixed(1);
}

const errorMessage = document.createElement("div"); // Create an error message container
errorMessage.style.color = "red";
errorMessage.style.marginTop = "5px";
errorMessage.style.display = "none"; // Initially hidden
document.querySelector(".currency").appendChild(errorMessage);

// Error handling functions
function displayError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = "block";
}

function hideError() {
  errorMessage.style.display = "none";
}

// opening the modal
btn.addEventListener("click", () => {
  card.classList.remove("hide");
});

// closing the modal
closeModal.addEventListener("click", () => {
  card.classList.add("hide");
});

// using the escape key to close the modal
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") card.classList.add("hide");
  });


window.onclick = function (e) {
  if (e.target === card) {
    card.classList.add("hide");
  }
};
