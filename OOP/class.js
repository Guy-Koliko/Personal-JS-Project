class Persons {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }
    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
    calculateDate() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getMarriad(newLastName) {
        this.lastName = newLastName
    }
}


//instantiation

const mary = new Persons('Mark', 'Mobila', '11-20-1988');
console.log(mary.calculateDate())
mary.getMarriad('Holala');
console.log(mary)