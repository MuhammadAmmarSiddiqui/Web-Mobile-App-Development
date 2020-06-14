var ascii = prompt("Enter any single number or letter : ")
var con_ascii = ascii.charCodeAt(0);
if(con_ascii >= 48 && con_ascii <= 57){
    alert('The value you entered is a number');
}
else if(con_ascii >= 65 && con_ascii <= 90){
    alert('The value you entered is an uppercase letter');
}
else if(con_ascii >= 97 && con_ascii <= 122){
    alert('The value you entered is a lowercase letter');
}

var num_1 = +prompt('Enter the first no.');
var num_2 = +prompt('Enter the second no.');
if(num_1 > num_2){
    alert(num_1);
}
else if(num_2 > num_1){
    alert(num_2);
}
else if(num_1 === num_2){
    alert('Both numbers are equal');
}

var num = +prompt('Enter the number to check that if it us +ve, -ve or 0');
if(num === 0){
    alert('The number is zero');
}
else if(num > 0){
    alert('The number is a positive number');
}
else if(num < 0){
    alert('The number is a negative number');
}

var letter = prompt('Enter the single letter');
if(letter === 'a' || letter === 'e' || letter === 'i' ||letter === 'i' || letter === 'u'){
    alert('true');
}
else {
    alert('false');
}

var password = 'open24/7';
var user_password = prompt('Enter your password');
if(user_password === null){
    alert('Please enter your password');
}
else if(password === user_password){
    alert('Correct! The password you entered matches the original password');
}
else if(user_password !== password && user_password !== null){
    alert('Incorrect password');
}

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting);
}


var time = +prompt('Enter the time in a 24 hour format like 1900 = 7pm');
if(time >= 0000 && time < 1200){
    alert('Good morning');
}  
else if(time >= 1200 && time < 1700){
    alert('Good afternoon');
}
else if(time >= 1700 && time < 2100){
    alert('Good evening');
}
else if(time >= 2100 && time <= 2359){
    alert('Good night');
}
