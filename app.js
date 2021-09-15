const billAmount = document.querySelector("#bill-amount");
const btnNext = document.querySelector("#btn-next");
const cashGivenInput = document.querySelector("#cash-given-input");
const cashAmount = document.querySelector("#cash-amount");
const errorMessage = document.querySelector("#error-msg");
const btnCheck = document.querySelector("#btn-check");
const notesToReturn = document.querySelectorAll(".no-of-notes");
const tableChange = document.querySelector(".table-change");
const tableCaption = document.querySelector("#table-caption");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

function nextButtonHandler() {
  if (Number(billAmount.value) > 0) {
    cashGivenInput.style.display = "block";
    btnNext.style.display = "none";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Enter Valid Bill Amount";
  }
}

function calculateAmountToBeReturned() {
  if (Number(cashAmount.value) > 0) {
    if (Number(cashAmount.value) === Number(billAmount.value)) {
      errorMessage.style.display = "block";
      tableChange.style.display = "none";
      tableCaption.style.display = "none";
      errorMessage.innerText = "No Change to return";
    } else if (Number(cashAmount.value) < Number(billAmount.value)) {
      errorMessage.style.display = "block";
      tableChange.style.display = "none";
      tableCaption.style.display = "none";
      errorMessage.innerText =
        "Cash is less than bill, please enter right amount";
    } else if (Number(cashAmount.value)> Number(billAmount.value)) {
      errorMessage.style.display = "none";
      tableChange.style.display = "block";
      tableCaption.style.display = "block";

      let amountToBeReturned = Number(cashAmount.value) -Number(billAmount.value);

      for (let i = 0; i < availableNotes.length; i++) {
        let numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];

        notesToReturn[i].innerText = numberOfNotes;
      }
    } else {
      errorMessage.style.display = "block";
      errorMessage.innerText =
        "Enter valid bill amount and cash given to continue";
      tableChange.style.display = "none";
      tableCaption.style.display = "none";
    }
  }else{
    errorMessage.style.display = "block";
    errorMessage.innerText = "Enter valid cash amount";
    tableChange.style.display = "none";
    tableCaption.style.display = "none";
  }
}



btnNext.addEventListener("click", nextButtonHandler);
btnCheck.addEventListener("click", calculateAmountToBeReturned);
