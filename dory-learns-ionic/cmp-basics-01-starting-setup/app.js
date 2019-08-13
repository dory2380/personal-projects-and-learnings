const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
const alertController = document.querySelector('ion-alert-controller');

let totalExpenses = 0; 
totalExpensesOutput.textContent = totalExpenses;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';  
};

confirmBtn.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <=0 || 
        enteredAmount <= 0 ||   
        enteredAmount.trim().length <=0
        ) {
            // the create() function is part of Ionic, not html. It is asynchronous and does not display automatically. To display the created alert, we have to add then() which returns a promise which will fulfill when the creation of this element is done. Ion alert component is created for you by the alert-controller. On this alert element, you can then call present to present it on the screen
            alertController.create({
                message: 'Please enter a valid reason and amount',
                header: 'Invalid Inputs',
                buttons: ['Okay']
            })
            .then(alertElement => {
                alertElement.present();
            });
            return; // do nothing
        }
        const newItem = document.createElement('ion-item');
        newItem.textContent = enteredReason + ': $' + enteredAmount;

        expensesList.appendChild(newItem);
        totalExpenses += +enteredAmount;
        totalExpensesOutput.textContent = '$' + totalExpenses;
        clear();
});

cancelBtn.addEventListener('click', clear);