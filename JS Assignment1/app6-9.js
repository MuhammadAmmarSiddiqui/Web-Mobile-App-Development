var a = 10;
document.write("Result<br> The value of a is " + a + "<br><br>");
document.write("------------------------------------<br><br>");

document.write("The value of ++a is " + (++a) + "<br>");
document.write("Now the value of a is " + a + "<br>");
document.write("------------------------------------<br><br>");

document.write("The value of a++ is " + (a++) + "<br>");
document.write("Now the value of a is " + a + "<br>");
document.write("------------------------------------<br><br>");

document.write("The value of --a is " + (--a) + "<br>");
document.write("Now the value of a is " + a + "<br>");
document.write("------------------------------------<br><br>");

document.write("The value of a-- is " + (a--) + "<br>");
document.write("Now the value of a is " + a + "<br>");
document.write("------------------------------------<br><br>");

var a = 2, b = 1;
document.write("The o/p after --a is " + --a + "<br>");
var c = (--a) - (--b);
document.write("The o/p after --a - --b is" +  c + "<br>");
var d = c + ++b;
document.write("The o/p after --a - --b + ++b is " + d + "<br>")
var e = d + b--;
document.write("The o/p after --a - --b + ++b + b-- is " + e + "<br>");
result = --a - --b + ++b + b--;
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
document.write("result is " + e + "<br>");

a = prompt("Enter the greeting word");
alert(a + " to visit my website");

a = +prompt("Enter the number of table you want to print");
if (a === 0){
    var a = 5;
    for ( var i = 1; i<=10; i++){
        document.write(a + "  x " + i + "=" + a * i + "<br>");
    }
}
else {
    for ( var i = 1; i<=10; i++){
        document.write(a + "  x " + i + "=" + a * i + "<br>");
    }
}


//var sub_1 = prompt('Enter the name of first subject');
//var sub_2 = prompt('Enter the name of second subject');
//var sub_3 = prompt('Enter the name of third subject');
//var total_marks_each_sub = 100;
//var total_marks = 300;
//var sub_1_marks = +prompt('Enter the obtained marks of ' + sub_1);
//var sub_2_marks = +prompt('Enter the obtained marks of ' + sub_2);
//var sub_3_marks = +prompt('Enter the obtained marks of ' + sub_3);
//var total_obt_marks = sub_1_marks + sub_2_marks + sub_3_marks;
//var sub_1_percent = (sub_1_marks / total_marks_each_sub) * 100;
//var sub_2_percent = (sub_2_marks / total_marks_each_sub) * 100;
//var sub_3_percent = (sub_3_marks / total_marks_each_sub) * 100;
//var total_percent = (total_obt_marks / total_marks) * 100;

//document.getElementById("sub_1").innerHTML = sub_1
//document.getElementById("sub_2").innerHTML = sub_2;
//document.getElementById("sub_3").innerHTML = sub_3;
//document.getElementById("total_marks_each_sub").innerHTML = total_marks_each_sub;
//document.getElementById("sub_1_marks").innerHTML = sub_1_marks;
//document.getElementById("sub_1_percent").innerHTML = sub_1_percent;
//document.getElementById("sub_2_marks").innerHTML = sub_2_marks;
//document.getElementById("sub_2_percent").innerHTML = sub_2_percent;
//document.getElementById("sub_3_marks").innerHTML = sub_3_marks;
//document.getElementById("sub_3_percent").innerHTML = sub_3_percent;
