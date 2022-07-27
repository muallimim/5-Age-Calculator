function birthyear2age(){
event.preventDefault();

var birth_year;
var current_year;
var age;

var d=new Date();


birth_year=document.getElementById("birth_year").value;
current_year = d.getFullYear();

age = current_year - birth_year;
document.getElementById("result").innerHTML = "Yaşınız: " + age;
}

//https://easyupload.io/j5qmkp