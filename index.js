const a = 5;
const b = 10;
console.log("a is equal to: %s and b is equal to: %s", a, b);
console.log(a * b);

const { result } = require("lodash");
const os = require("os");
const { resolve } = require("path/posix");
console.log(os.type());
console.log(os.platform());

const car = {
	brand: "BMW",
	model: "z-5",
};

module.exports = car;
//or
exports.car = car;

//              npm packages

//npx

//event loop
cosnt_ = require("lodash");

const bar = () => {
	console.log("bar");
};
const baz = () => {
	console.log("baz");
};
const foo = () => {
	console.log("foo");
	setTimeout(bar, 1000);
	baz();
};
foo();

//callbacks

getMessage = () => {
	//console.log("getMessage");
    setTimeout(() => {
        console.log("Get Meassage")
    },1000)
};
displayMessage = () => {
	console.log("displayMessage");
};

getMessage();
displayMessage();
// callback by passing an argument
getMessage = (msg, callback) => {
	//console.log("getMessage");
    setTimeout(() => {
        console.log(msg)
        callback()
    },1000)
};
displayMessage = () => {
	console.log("displayMessage");
};

getMessage("Get Message", displayMessageṇ);
//callback: passing function as an argument inside the other function and returning it


//          promises (introduced with ecma script-17)

let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Run Before"), 1000)
    //to reject
    //setTimeout(()=> reject(new Error("Whoops")),1000)
});

promise.then(
    result => {
        console.log(result)
        //if i need to print the function after the first function
        getAfter()
    },
        error =>console.log(error)
)

function getAfter () {
    console.log("print After")
}


//          async and await

function Clown() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Cool")
        },2000)
    })
}
// the promise remains pending so to execuse the function first function and the the second fucntion we add async and await to it
async function msg(callback){
    const msg = await Clown()
    console.log("Message", msg)
    callback();
}
msg(getResult)

function getResult () {
    console.log("Execute after")
}


