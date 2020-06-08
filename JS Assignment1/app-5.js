var firstnum = 5;
var secondnum =3;
var result = firstnum + secondnum;
document.write("Sum  of " + firstnum + "and " + secondnum + " is " + result + "<br>");

var result1 = firstnum - secondnum;
var result2 = firstnum * secondnum;
var result3 = firstnum / secondnum;
var result4 = firstnum % secondnum;

document.write("Differnce  of " + firstnum + "and " + secondnum + " is " + result1 + "<br>");
document.write("Product  of " + firstnum + "and " + secondnum + " is " + result2 + "<br>");
document.write("Division  of " + firstnum + "and " + secondnum + " is " + result3 + "<br>");
document.write("Remainder  of " + firstnum + "and " + secondnum + " is " + result4 + "<br>");

var task;
document.write("Value after variable declaration is " + task + "<br>");
var task = 5;
document.write("Initial value : " + task + "<br>");
task++;
document.write("Value after increment is : " + task + "<br>");
task + 7;
document.write("Value after addition is :" + task + "<br>");
task--;
document.write("Vakue after decrement is :" + task + "<br>");
document.write("Output : The remainder is 0<br><br>");

var ticket_price = 600;
document.write("Total cost to buy 5 tickets is " + ticket_price * 6 +"<br><br>");

var table = 4;
for ( var i = 0; i<=10; i++){
    document.write("4 x 1 =" + table * i + "<br>");
}
document.write("<br><br>");

var celsius = 32;
var farenheit;
farenheit = (celsius * (9 / 5)) + 32;
document.write(celsius + "C is " + farenheit + "F <br>");
farenheit = 25;
celsius = (farenheit - 32) * (5/9);
document.write(farenheit + "F is " + celsius + "C <br><br>");

var item1 = 650;
var quantity1 = 3;
var price1 = item1 * quantity1;
var item2 = 100;
var quantity2 = 7;
var price2 = item2 * quantity2;
var total_price = price1 + price2;
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 2 is " + quantity1 + "<br><br>");
document.write("Total cost of your orsr is " + total_price + "<br><br>");

var total_marks = 980;
var obt_marks = 804;
var percent = (obt_marks / total_marks) * 100;
document.write("<h1>Marks Sheet</h1><br><br><br>");
document.write("Total Marks : " + total_marks + "<br>");
document.write("Marks Obtained : " + obt_marks + "<br>");
document.write("Percentage : " + percent + "<br><br>");

var USD_rate = 104.80;
var SAR_rate= 28;
var USD_amount = 10;
var SAR_amount = 25;
document.write("Total currency in PKR :" + ((USD_rate * USD_amount) + (SAR_rate * SAR_amount)) + "<br><br>");

var num1 = 7;
console.log(((num1 + 7) * 10) / 2);

var Birthyear = 1992;
var currentyear = 2020;
var age = currentyear - Birthyear;
document.write("<h1>Age Calculator</h1><br><br>");
document.write("Current Year : " + currentyear + "<br>");
document.write("Birth Year : " + Birthyear + "<br>");
document.write("They are neither " + age++ + "or" + age-- + "years old<br><br>");
document.write("Your age is : " + age + "<br><br>");


var radius = 20;
const pi = 3.142;
document.write("<h1>The Geometerizer</h1><br><br>")
document.write("Radius of a circle : " + radius + "<br>");
document.write("The circumference is : " + 2 * pi * radius + "<br>");
document.write("The area is : " + pi * (radius ^ 2) + "<br><br>");

var snack = "chocolate chip";
var Current_age = 15;
var Max_age = 65;
var amount = 3 * 365;
document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
document.write("Favourite Snack : " + snack + "<br>");
document.write("Current age : " + Current_age + "<br>");
document.write("Estimated Maximum Age : " + Max_age + "<br>")
document.write("Amount of snacks per day : 3<br>");
document.write("You will need " + ((Max_age - Current_age) * amount) + snack + " to last you until the ripe age of " + Max_age + "<br>");




