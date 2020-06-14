var city = prompt("Enter the name of city");
//var upd_city = city.toLowerCase;
if(city === "karachi") {
    alert("Welcome to the city of lights");
}

var gender = prompt("Enter your gender");
if(gender === "male"){
    alert("Good Morning Sir");

}
else if (gender === "female") {
    alert(" Good Morning Ma’am.")
}
else{
    alert('The option you type is not a gender in  our code');

}

var colour = prompt("Enter the traffic signal colour");
if(colour === "red") {
    alert("Must Stop");
}
else if(colour === "yellow") {
    alert("Ready to move");
}
else if(colour === "green") {
    alert("Move now");
}


var fuel = +prompt("Enter the amount of fuel in your car");
if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

if (true){
alert("True");
}
if (false){
alert("False");
}

if("car" < "cat"){
alert("car is smaller than cat");
}

var total_marks = 300;
var sub_1_marks = +prompt('Enter the obtained marks of subject 1');
var sub_2_marks = +prompt('Enter the obtained marks of subject 2');
var sub_3_marks = +prompt('Enter the obtained marks of subject 3');
var total_obt_marks = sub_1_marks + sub_2_marks + sub_3_marks;
var total_percent = (total_obt_marks / total_marks) * 100;
var remarks = "";
var grade = "";
if(total_percent >= 80)
{
    remarks = "Excellent";
    grade = "A-One";
    document.write("<br><h1>Marks Sheet</h1><br><br><br>");
    document.write("Total Marks : " + total_marks + "<br>");
    document.write("Marks Obtained : " + total_obt_marks + "<br>");
    document.write("Percentage : " + total_percent + "<br>");
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks + "<br><br>");
}
else if(total_percent >=  70 & total_percent < 80){
    remarks = "Good";
    grade = "A";
    document.write("<br><h1>Marks Sheet</h1><br><br><br>");
    document.write("Total Marks : " + total_marks + "<br>");
    document.write("Marks Obtained : " + total_obt_marks + "<br>");
    document.write("Percentage : " + total_percent + "<br>");
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks + "<br><br>");
}
else if(total_percent >=  60 & total_percent < 70){
    remarks = "You need to improve";
    grade = "B";
    document.write("<br><h1>Marks Sheet</h1><br><br><br>");
    document.write("Total Marks : " + total_marks + "<br>");
    document.write("Marks Obtained : " + total_obt_marks + "<br>");
    document.write("Percentage : " + total_percent + "<br>");
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks + "<br><br>");
}
else if(total_percent < 60){
    remarks = "Sorry";
    grade = "Fail";
    document.write("<br><h1>Marks Sheet</h1><br><br><br>");
    document.write("Total Marks : " + total_marks + "<br>");
    document.write("Marks Obtained : " + total_obt_marks + "<br>");
    document.write("Percentage : " + total_percent + "<br>");
    document.write("Grade : " + grade + "<br>");
    document.write("Remarks : " + remarks + "<br><br>");
}
 

var secret_num = 8;
var guess_num = +prompt("Enter the guessing number ");
if(secret_num === guess_num){
    alert("Bingo! Correct answer");
}
else if(secret_num >= guess_num ){
    alert("Close enough to the correct answer");
}

var num_3 = +prompt("Enter the number to check that if it is divisible by 3");
if((num_3 % 3) === 0){
    alert("The no. is dibisible by 3 ");
}

var num_even_odd = +prompt("Enter the number to check that if it is an even or an odd no.");
if((num_even_odd % 2) === 0){
    alert(num_even_odd + "is an even number");
}
else{
    alert(num_even_odd + "is an odd number");
}

var temp = +prompt("Entet the temperature in celsius")
if(temp > 40){
    alert("“It is too hot outside.")
}
else if(temp > 30 && temp <=40){
    alert("The Weather today is Normal.")
}
else if(temp > 20 && temp <=  30){
    alert("Today’s Weather is cool.")
}
else if(temp > 10 && temp <= 20){
    alert("OMG! Today’s weather is so Cool.")
}