document.getElementById('button').addEventListener('click', loadCustomer);
document.getElementById('button1').addEventListener('click', loadCustomer2);

//function to load customer
function loadCustomer(e) {


    //call an http request
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            //geting the JSON object
            const customer = JSON.parse(this.responseText);
            const output = `
            
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.name}</li>
                    <li>COMPANY: ${customer.company}</li>
                    <li>PHONE: ${customer.phone}</li>

                </ul>
            `;
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send();


}


//function to load customer
function loadCustomer2(e) {


    //call an http request
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            //geting the JSON object
            let output = '';
            const customer = JSON.parse(this.responseText);
            customer.forEach(function (customer) {
                output += `
            
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>NAME: ${customer.name}</li>
                    <li>COMPANY: ${customer.company}</li>
                    <li>PHONE: ${customer.phone}</li>

                </ul>
            `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send();


}