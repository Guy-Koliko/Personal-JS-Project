//variables to use
const form = document.querySelector('#loan-form');
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');

//load the loan calculator
loanCalculatorLoaded();

function loanCalculatorLoaded() {

    //handing the form
    form.addEventListener('submit', function (e) {

        //show loader 
        document.getElementById('loader').style.display = ' block';

        //set timer
        setTimeout(loanCalculated, 2000);

        //preventing the default
        e.preventDefault();
    });
}

function loanCalculated() {

    //geting the formulars 
    const principals = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(years.value) * 12;

    //compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principals * x * calculatedInterest) / (x - 1);

    //add the results to their placeholders 
    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principals).toFixed(2);


        //show result
        document.getElementById('result').style.display = 'block';
        //hide loader
        document.getElementById('loader').style.display = ' none';


    } else {
        showErrors('Please check your numbers');
    }

}

function showErrors(error) {

    //hide result
    document.getElementById('result').style.display = 'none';
    //hide loader
    document.getElementById('loader').style.display = ' none';

    //get element
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');


    //create a div
    const errorDiv = document.createElement('div');

    //add class
    errorDiv.className = 'alert alert-danger';

    //append class to div
    errorDiv.appendChild(document.createTextNode(error));

    //add error
    card.insertBefore(errorDiv, heading);

    //clear error after 3 sec
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}