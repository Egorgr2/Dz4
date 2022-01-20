const age = 67;

if (age >= 55 && age <= 99) {
  console.log("попало");
} else {
  console.log("не попало");
}










const age1 = 55;
let name;

if (age1 <= 16) {
  name = 'дитина';
}else if(age1 > 16 && age1 < 61){
  name = 'дорослый'
}else{
  name = 'пенсионер'
}

console.log(name);









const name1 = "";
const surname = "";
if (name1.length > 4 && surname.length > 5) {
  alert(name.length + surname.length);
} else {
  alert('УПС');
}







let lang = "en";
let month;

switch (lang) {
  case "en":
    month = "January";
    break;
  case "ru":
    month = "Январь";
    break;
  case "fr":
    month = "Janvier";
    break;
  case "ua":
    month = "Січень";
    break;

  default:
    console.log("Ничего не совпало");
}

console.log(month);
