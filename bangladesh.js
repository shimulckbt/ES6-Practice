import { laptop, MobilePhone, Cosmatics, China } from "./china.js"; //if you import just ./china it will give you MIME type error so you should import ./china.js(file_type mandatory)

console.log(laptop); // named import variable
MobilePhone(); // named import function
Cosmatics(); // named import function

let obj = new China();
obj.toys(); // named import class