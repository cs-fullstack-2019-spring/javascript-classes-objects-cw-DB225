//Create a Person class with three attributes: name, weight, and height.
// Create a method that can calculate the BMI of a person using the formula below.
// Create an object of the class and use the function.
// BMI is (weight / (height * height)) x 703. Weight is in pounds and height is in inches.

class Person{
    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }
    calculateBmi(){
        var BMI = (this.weight/ (this.height*this.height))*703;
        alert(BMI);
    }
}
var result = new Person("Didi ",190,6.3);
alert(result.name);
alert(result.weight);
alert(result.height);
result.calculateBmi();
