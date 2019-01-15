//Create a Bank class with the the name and balance attributes. Afterwards, create an object of the class and follow the instructions below:
// Creates an account named "Matt's account" with the balance of 1000
// Creates an account named "My account" with the balance of 0
// Withdraws 100.0 from Matt's account
// Deposits 100.0 to My account
// Prints both accounts

class Bank{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
    withdraws(){
       console.log(this.name +", "+ (this.balance - 100));
    }
    Deposit(){
        console.log(this.name +", "+ (this.balance + 100));
    }
}
var withdraw = new Bank("Matt",1000);
var deposit = new Bank("My account",0);
withdraw.withdraws();
deposit.Deposit();
alert(withdraw.name);
alert(withdraw.balance);
alert(deposit.name);
alert(deposit.balance);