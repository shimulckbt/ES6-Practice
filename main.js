"use strict"
function myName(a){
    let name="Shimul";
    return name;
}
// console.log(myName());

////////         Spread Operator  and  PUSH METHOD       ///////
  
let poorCountry = ["Bangladesh", "Srilanka", "Pakistan"];

let richCountry = [...poorCountry, "Canada", "America","Italy"];

let country = ["India"];

country.push(poorCountry,richCountry);

// console.log(country);


///////////      REST PARAMETER      //////////

function Calculator(...num){
    let sum = 0;
    for(let i of num){
        sum = sum+i;
    }
    // console.log(sum);
}

Calculator(1,2,3,4,5,6,7,8,9);

///////       DYNAMIC FUNCTION     /////////

let name = function(nameValue){
    return nameValue;
}
// console.log(name("Shimul Chakraborty"));

//////       OBJECT       //////////


let obj = {
    name: 'shimul',
    color: 'fair',
    hair: 'black'
}
let objNested = {
    name: {
        fName:'Shimul',
        lName: {
            short: 'ckbt',
            long: 'Chakraborty'
        },
    },
    color: 'fair',
    hair: 'black'
}

// console.log(obj['name']);

// console.log(objNested['name']['lName']['long']);


////////       FOR IN LOOP IN OBJECT        /////////

for(let props in obj){
    // console.log(props);
    // console.log(props+": "+obj[props])
}

for(let i in objNested.name.lName){
    // console.log(i+": "+objNested.name.lName[i]);

}


///////////////          ARRAY             //////////

var countries = ["bd","ind","pak","aus","rsa"];  // simple array
var allCountry = new Array("bd","ind","pak","aus","rsa"); // using array constructor

// console.log(allCountry[3])

///////////////          ARRAY DESTRUCTURING             //////////

var[,,a,,] = countries;
// console.log(a)


////////          Map             ////////////

var myMap = new Map();

myMap.set("k1", "Bangladesh")
myMap.set("k2", "India")
myMap.set("k3", "Pakistan")
myMap.set("k4", "Bhutan")
myMap.set("k5", "Nepal")
myMap.set("k5", "Canada")

// console.log(myMap.keys())

// var myValue = myMap.values();
// var myKey = myMap.keys();
// console.log(myValue)

// myMap.delete("k1")
// myMap.clear(); // delete all
// var k = myMap.get("k5");
// console.log(myMap.get("k5"))
// for(let mvalue of myMap.values()){
//     console.log(mvalue)
// }
// if(myMap.has("k1")){
//     console.log("yes");
// }else{
//     console.log("no");
// }


//////////           SET          /////////////


var mySet = new Set();

mySet.add("Bangladesh")
mySet.add("India")
mySet.add("Pakistan")
mySet.add("Bhutan")
mySet.add("Nepal")
mySet.add("Canada")

// mySet.clear()
// mySet.delete("Nepal")
// mySet.clear()
// mySet.values()

// if(mySet.has("Nepal")){
//     console.log("ok")
// }else{
//     console.log("No")
// }



//////////            CLASS / CLASS CONSTRUCTOR             //////////


class shimul{
    constructor(a,b){
        // console.log(a+b)
        this.first_num = a // class variable, that can be accessible from anywhere in class
        this.second_num = b
    }
    add(){
        let result = this.first_num + this.second_num;// result in normal variable can not be accsed outside of this function
        // console.log(result);
    }
    height(x){
        // console.log(x)
    }
    weight(x){
        // console.log(x)
    }
    color(x){
        // console.log(x)
    }
    hair(x){
        // console.log(x)
    }
    eyes(x){
        // console.log(x)
    }
}

var objClassCons = new shimul(10,20);//this arguments will recieve constructor's parameter
objClassCons.add();
var objClass = new shimul();
objClass.height("5 ft 10 inch")
objClass.weight("65 kg 200 gm")
objClass.color("fair")
objClass.hair("short, sepia")
objClass.eyes("not full black")


//////        STATIC        ///////

class PracStatic {
    static hello(){
        // console.log("Hi, I am static keyword");
    }
}

PracStatic.hello();


///////      CLASS INHERITANCE        ///////



class parent {
    helloOne(){
        // console.log("I am parent class function one");
    }

    static helloTwo(){
        // console.log("I am parent class function two");
    }
}

class child extends parent{


}

/////        Method Overriding       //////

class childOver extends parent{
    
    helloOne(){
        // console.log("I am Overriding helloOne");
    }

    static helloTwo(){
        // console.log("I am Overriding helloTwo");
    }
}

let childExt = new child();

childExt.helloOne(); // using object process

child.helloTwo(); //  using static keyword process

let childOverRide = new childOver()
childOverRide.helloOne()

childOver.helloTwo();

class practice extends childOver{

}

let childOverExt = new childOver()
childOverExt.helloOne();
practice.helloTwo();

class SperChild extends parent{
    
    demo(){
        super.helloOne();
        // super.helloTwo();  // eta error hobe karon age static keyword use kora hoiche
    }
}

let superChild = new SperChild()
superChild.demo();
