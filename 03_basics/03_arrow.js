const user = {
    username :"rahul",
    price: 444,

welcomeMessage: function() {
console.log(`${this.username}, welcome to website`);   // this refer karta hai current context ko

console.log(this);

}

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);  //browser ke andar jo global  object hai wo window object hai

// function chai(){
//     console.log(this.username);
    
// } 
// chai()


// const chai = function (){
//     let usermname = "rahul"
//     console.log(this);
    

// }


const chai =  ()=> {
    let usermname = "rahul"
    console.log(this);
    

}
chai()


// arrow function //


// const addtwo=(num1,num2) => {
//     return num1 +num2
// }

// console.log(addtwo(4,5))


// const addtwo=(num1,num2) => num1+num2
// console.log(addtwo(4,5))

const addtwo=(num1,num2) => ({username:rahulchauhan})
console.log(addtwo(4,5))


