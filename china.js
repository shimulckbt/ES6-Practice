const laptop = "Aus, HP, Dell, Apple";

function MobilePhone() {
    console.log("Exporting Mobile Phone");
}

function Cosmatics() {
    console.log("Exporting Cosmatics From China");
}

class China{
    toys(){
        alert("Toys Imported Successfully");
    }
}


export {laptop, MobilePhone, Cosmatics, China}; // named export variable,function

////////         default export-import         //////////

// use 'export default' to import without adding same name. if i export default {china}, then i can import { barma } or { canada } whatever i want,,all other functionalities are same in default export-import as like as named export-import