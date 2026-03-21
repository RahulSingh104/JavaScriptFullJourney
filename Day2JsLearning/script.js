// Step 1 - to Write a function 
// what is fnc
function abcd (){

}

// why fnc
function greet (){
    console.log('hello world');

}

greet();  //iss matlab func ko chalo or call karna fnc ko 
greet();
greet();
greet();


function greetings(val){
    console.log(val);

}

greetings("hey");
greetings("hello");
greetings("Rahul");


function bcd(a,b,c,d){
    console.log(a+b+c+d);

}

bcd(1,50,84,96)

// Rest parametes (...args)

function abd(a,b,c,...args){
    console.log(a,b,c,args)
}
abd(1,2,3,4,5,6,7,8,9)


// hoisting 

console.log(a)
var a = 12;


rahul();
function rahul(){
 console.log("hyyyheeye")
}

// iife -> Immediately invoked function expression
(function abce(){
   console.log("hello world");
})();


var ans = (function hii(){
    var a = 112;

    return {
        set:function(val){
            a = val;
        },
        get:function(){
            console.log(a);
        },
    }
})();

ans.set("32");
ans.get()

// HOFS
 function lalu(){
    return function(){
        console.log("rail manga gaya nahi milega ")
    }
 }
 var anss = lalu()
 anss()

 function nitish(fnc){
    fnc();

 }

 nitish(function(){
    console.log("jai bihar")
 })

function modi(){
    return function (){
        return function(){
            console.log("bhaio aur beheno")
        }
    }
}

modi()()();


// Callback function 

function fuck(val){
//    isse hofs
}
fuck(function(){
    // isse callback function kahte hai 
})