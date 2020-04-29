function validateForm() {
var x = document.forms["userId"]["userId"].value;  
switch (x)
{ 
case "flopez10":
var output = "Your Student ID is: " + x + "!";
alert(output);
studentURL = "http://students.cpcc.edu/~"
alert(studentURL + x); 
break; 
case "mkhan016": 
var output = "Your Student ID is: " + x + "!";
alert(output);
studentURL = "http://students.cpcc.edu/~"
alert(studentURL + x); 
break; 
case 3: 
console.log("value of i = 3"); 
break; 
default: 
text="userid is not equal to any given values. You're not in this class!"
alert(text);
break;
}
} 