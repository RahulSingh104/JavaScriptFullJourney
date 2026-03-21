// Array and objects

var a = [];  // thos is simple array

// How to create array --> []

// How to access member of array 

var arr = [1,2,3,5,6]
arr[2] // indexing of array 2 -> 2

var arr1 = [];
arr1[0]= 12;
arr1[2]=15;
var arr2 = new Array();
arr2[0]= 12;

var arrr = new Array(30);

for(var i=0; i<30; i++){
    arr[i]=i;
}

// js mein arrays mein hum log ek se jyada values store to kr skte hai par chaate to alag data type ki value bhi store kar sakte ho 

var aarr = [1,2.4,true,"rahul"]

// Object 

 var obj = {};

//  Value pairs ko hold krte hai 
 var oobj = {
    name: "rahul",
    age: "23",
    email:"rahul04062004@gmail.com",
    isHandsome:false,
    isVeryHandsome:true,
 }

// How to access an object 

var objj = {
    name: "rahul",
    age:23,
    email:"rahul@gmail",
    isMarried: false,
}
objj.email



// Problem 
// User adds Products -> calculate total -> apply discount

//  this code is bad code according to the SOlid principle
function cart1 (data){
    let total = 0;
    for(let item of data){
        total +=item.price *item.qty;

    }
    if(total > 1000){
        total = total - total*0.1;
    }
    return total;
}


// good code 

const cart = [
    {name: "Shirt", price:500,qty:2},
    {name: "Shoes", price:800,qty:1},
];


function calculateItemTotal(item){
    return item.price * item.qty;
}

function calculateCartTotal(cart){
    return cart.reduce((total,item)=> total + calculateItemTotal(item),0);
}
 function applyDiscount(total){
    if(total > 1000){
        return total * 0.9;
    }
    return total;

 }
 const total = calculateCartTotal(cart);
 const finalPrice = applyDiscount(total);

 console.log(finalPrice);


//  User Management System 
// 🎯 Problem:
// Get user full name
// Filter active users

const users = [
    {FN:"Rahul",LN:"Singh",isAcitve:true},
    {FN:"AnnuRadha",LN:"Patel",isActive:false},
];

function getFn(user){
    return `${user.FN} ${user.LN}`;
}
function isAcitveUser(user){
    return user.isAcitve;

}

function getActiveUsers(users){
    return users.filter(isAcitveUser);
}

const acitveUsers = getActiveUsers(users);

acitveUsers.forEach(user =>{
    console.log(getFn(user))
})



const products = [
    {name:"Phone",price:20000,inStock:true},
    {name:"laptop",price:50000,inStock:false},
    {name:"Tablet",price:15000,inStock:true}
];

function getProductTotal(product){
    return `${product.name}: ${product.price}`
}

function isCheapAndInStock(product){
    return product.inStock===true && product.price < 30000;
}
function getFilterProducts(products){
    return products.filter(isCheapAndInStock)
}

const  StockProduct = getFilterProducts(products);

StockProduct.forEach(product =>{
    console.log(getProductTotal(product))
})



const students  = [
    {name:"Rahul", marks:85},
    {name:"Annuraddha p", marks: 80},
    {name:"Neha",marks:70},
];

function studentMarksTotal(student){
    return `${student.name} ${student.marks}`
}

function PassStudent (student){
    return student.marks>=50
}

function passedStudentsList(studentsArray){
    return studentsArray.filter(PassStudent)
}

const passedOnes = passedStudentsList(students)

passedOnes.forEach(student =>{
    console.log(studentMarksTotal(student))
})