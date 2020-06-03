//create a persons constructor

function Perso(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

//create a person method
Perso.prototype.greeting = function () {
    return `Hello ${this.firstname} ${this.lastname}`;
}

const person1 = new Perso('John', 'Ingu');

// console.log(person1.greeting())

//now to inherint all method from the Persons constructor
Customer.prototype = Object.create(Perso.prototype);

//make customer.prototype returns custome
Customer.prototype.constructor = Customer;

//create a customer constructor

function Customer(firstname, lastname, phone, membership) {
    Perso.call(this, firstname, lastname);
    this.phone = phone;
    this.membership = membership;
}

const customer1 = new Customer('Mary', "May", '4441-222-3333', 'Gold');

console.log(customer1.greeting()); 