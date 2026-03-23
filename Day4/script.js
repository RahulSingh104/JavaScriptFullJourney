// Javascript Advanced HOFs, callback and closures

// cb fnc -> ek aisa function jo app kisi aur function me pass karte ho future mein chalne ke liyee hota hai

// hofs -> ek aisa function jo accept kare doosra function in parameter ya fir return kare ek aur function 

// closures -> ek aisa functionjo return kare doosra functio and jo fnc return hau hai wo use kare parent fnc ka kio variable.


// har closures HOfs hota hai par har HOFs closure nahi hota hai 

function abc (){
    let a = 13; 
    return function (){
        console.log(a)
    }
}

// Q1. 
//  function callerfnc(fn){
//     setTimeout(fn, 3000);
//  }

//  callerfnc(function(){
//     console.log("hey")
//  })

//  Q2. 
 function mapkicopy (arr,fnc){
    var newarr = [];
    for(var i = 0; i<arr.length; i++){
        fnc(arr[i])
    }
    return newarr;
 }

  var ans = mapkicopy([1,2,3,4,5,6],function (value){
    return value + 3;
 })

// Q3. 
 function counter (){
    let count = 0;
    return function(){
        count++;
        console.log(count);
    }
 }
 var fn = counter();
 fn()
 fn()
 fn()

//  Q4. 
function fnlimiter(fn ,limit){
    let total = 0;
    return function(){
        if(total <limit){
            total++;
            fn();
        }
    }
}
 
var l = fnlimiter(function(){
    console.log("hello rahul")

},4)

l();
l();
l();
l();
l();


// Q 

// function repeatrun(fn, time){
//     setInterval(fn,time);
// }
// repeatrun(function(){
//     console.log("hello")
// },2000)

function greetkaro(greeting){
    return function(){
        console.log(`${greeting} ${name}`)
    }
}

let greetingfnc = greetkaro("Hello Rahul excellent developer ");
greetingfnc("Harsh")
greetingfnc("Harshit")
greetingfnc("React")


let spanishfnc = greetkaro("hola !");
spanishfnc("Rahul")

// Implement a function that takes a callback and only executes it once (HOF + Closure).


// function Agf(cb){
//     return function (){
//         cb();
//     }
// }

// var newfnc = Agf(function(){
//     console.log("Some code which should be executed")
// })

// newfnc();   wrong solution 


// right solution

function agf(cb){
    let executed = false;
    return function (){
        if(!executed){
            executed = true;
            cb();
        }
        else    {
            console.error("already runs")
        }
    }
}

let newfnc = agf(function(){
    console.log("ran")
})
newfnc();
newfnc(); //THIS IS NOT RUNNING 


// Implement a function that throttles another function (HOF + Closures)

function throttles(fn, delay){
    let lastCall = 0;
    return function (){
        let current = Date.now()
        if(current - lastCall>= delay){
            lastCall = current;
            fn();
        }
    }

}

let newfncc = throttles(function(){
 console.log("will run in 2 seconds ")
},2000)
newfncc();
newfncc();