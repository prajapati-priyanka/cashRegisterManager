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
    hideErrorMessage();
  } else {
    showErrorMessage("Enter Valid Bill Amount");
  
  }
}

function calculateAmountToBeReturned() {

  if (Number(cashAmount.value) > 0) {
    if (Number(cashAmount.value) === Number(billAmount.value)) {
      showErrorMessage("No Change to return");
      hideTableChange();
      hideTableCaption();
    } else if (Number(cashAmount.value) < Number(billAmount.value)) {
      showErrorMessage("Cash is less than bill, please enter right amount");
      hideTableChange();
      hideTableCaption();
    } else if (Number(cashAmount.value) > Number(billAmount.value)) {
      hideErrorMessage();
      showTableChange();
      showTableCaption();

      let amountToBeReturned =
        Number(cashAmount.value) - Number(billAmount.value);

      for (let i = 0; i < availableNotes.length; i++) {
        let numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];

        notesToReturn[i].innerText = numberOfNotes;
      }
    } else {
      showErrorMessage("Enter valid bill amount and cash given to continue");

      hideTableChange();
      hideTableCaption();
    }
  } else {
    showErrorMessage("Enter valid cash amount");

    hideTableChange();
    hideTableCaption();
  }
  if(Number(billAmount.value) < 0){
    hideTableCaption();
    hideTableChange();
    showErrorMessage("Enter positive bill amount");
  }
}

function showErrorMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}
function hideErrorMessage() {
  errorMessage.style.display = "none";
}
function showTableChange() {
  tableChange.style.display = "block";
}
function hideTableChange() {
  tableChange.style.display = "none";
}
function showTableCaption() {
  tableCaption.style.display = "block";
}
function hideTableCaption() {
  tableCaption.style.display = "none";
}

btnNext.addEventListener("click", nextButtonHandler);
btnCheck.addEventListener("click", calculateAmountToBeReturned);
