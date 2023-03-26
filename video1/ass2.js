// var num = "A";
// if (typeof (num) ==  "number") {
//     if (num % 2 == 0) {
//         console.log("çift");
//     }
//     else {
//         console.log("tek");
//     }
// } else {
//     console.log("Yanlış bir değer girdiniz.");
// }
var num="a";
var response;
if(typeof num !="number") response="lütfen bir sayı giriniz";
else if(num % 2 == 1) response=`${num} bir tek sayi`;
else if(num%2==0) response=`${num} bir çift sayi`;

console.log(response);

