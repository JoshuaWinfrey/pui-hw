/* question 1 */
/*
class Car {
    constructor(make, model) {
    this.make = make;
    this.model = model;
    }
    start() {
    console.log(this.make, this.model, "engine started");
    }
    stop() {
    console.log(this.make, this.model, "engine stopped");
    }
    drive(speed){
        console.log('Driving at',speed,'mph');
    }
    }

let car1 = new Car('Toyota','Camry');
car1.start();
car1.stop();
let car2 = new Car('Honda','Civic');
car2.drive(60);

*/

/* question 2 */

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    area(){
        let area = this.width * this.height;
        return area;
    }
    perimeter(){
        let perimeter = 2 * (this.width + this.height);
        return perimeter;
    }
}

let rectangle1 = new Rectangle(5,8);
console.log(rectangle1.area());
console.log(rectangle1.perimeter());

/* question 3 */

/* question 4 */

class BankAccount{
    constructor(accountNumber, accountHolder, initialBalance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }
    deposit(amount){
        this.balance = this.balance + amount;
        console.log('Your new balance is',this.balance);
        return this.balance;
    }
    withdraw(amount){
        this.balance = this.balance - amount;
        if (this.balance > 0){
        console.log('Your new balance is',this.balance);
        return this.balance;
        }
        else{
            console.log('insufficient funds');
        }
    }
    getAccountInfo(){
        return ('Account Number:',this.accountNumber,', Account Holder:',this.accountHolder);
    }
}

let BankAccount1 = new BankAccount(11111,'David Smith',2500);
let BankAccount2 = new BankAccount(22222, 'Sally May',3300);



console.log(BankAccount1.getAccountInfo());
console.log(BankAccount2.getAccountInfo());


/* question 5*/
/*

function getSum(){
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum += i;
}
console.log(sum);
}

function whileSum(){
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let sum = 0;
    let i = 0;
    while (i < numbers.length){
        sum += numbers[i];
        i++;
    } 
    console.log(sum);
}

function allEvens(){
    let sum = 0;
    for (let i = 2; i <= 20; i ++){
        if (i % 2 === 0){
            sum += i;
        }
    }
    console.log(sum);
    return sum;
}
*/
