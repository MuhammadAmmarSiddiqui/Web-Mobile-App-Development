var literal_arr = [];
var object_arr =  new Array();
var string_arr = ['John', "Andy"];
var num_arr = [3, 4, 5];
var bool_arr = [true, false, false];
var mix_arr = ['John', 4, true];
var education = ['SSC', 'HSC', 'BSC', 'BS','BCOM', 'MS', 'M.PHIL.', 'PhD'];
document.write("<h3>Qualifications</h3><br><br><br>");
for(var i = 0; i < education.length; i++){
    document.write(education[i] + "<br>");
}


var students = ['Micheal', 'John' , 'Tony'];
var score = [320, 230, 480];
var percentage = ['64%', '46%', '96%'];
for(var i = 0; i < students.length; i++){
    document.write("<br>Score of "+ students[i] + " is " + score[i] + ".Percentage: " + percentage[i] + "<br>");
}

var colour_arr = ['red', 'green', 'yellow'];
alert(colour_arr);
var beg_colour = prompt('Enter the colour you want to display in the beginning of an array');
colour_arr.unshift(beg_colour);
alert(colour_arr);
var end_colour = prompt('Enter the colour you want to display in the end of an array');
colour_arr.push(end_colour);
alert(colour_arr);
var col_1 = prompt('Enter another colour');
var col_2 = prompt('Enter another colour');
colour_arr.unshift(col_1, col_2);
alert(colour_arr);
colour_arr.shift();
alert(colour_arr);
colour_arr.pop();
var choice_col = prompt('Enter the colour of your choice');
var pos_col = +prompt('Enter the position at ehocch ypu want the colour to be added');
colour_arr.splice(pos_col - 1, 0, choice_col);
alert(colour_arr);
var del_col = +prompt('Enter the no. from where you want to delete the colours');
var del_till_col = +prompt('Enter the no. of how many  colours you want to delete');
colour_arr.splice(del_col, del_till_col);
alert(colour_arr);