

function saymyname(){
    console.log("h")
console.log("r")
console.log("t")
console.log("i")
console.log("e")

}
saymyname()

// function addtwonumbers(number1,number2){ //number1 and number2 ko parameter bolte hai
//     console.log(number1 + number2); 

//}



      function addtwonumbers(number1,number2){ //number1 and number2 ko parameter bolte hai


    //    let result = number1 + number2;
    //    return result

    return number1 + number2


      } 

    const result = addtwonumbers(5,6)            // 5,6 ko argument bolte hai

    // console.log("result:",result);


    function loginusermessage(username="sam"){
        if(username ===undefined){
            console.log("please enter a user name");
            return

        }
        return '${username} just logged in'

    }

// console.log(loginusermessage("hitesh"))

function calculatecartprice( val1,val2,...num1){
    return num1

}
// console.log(200,400,500,670);

const user = {
    username :"rahulchauhan",
    price:199

}
function handleobject(anyobject){
    console.log('username is${anyobject.price}and price is${anyobject.username}' );

}
// handleobject(user)
handleobject({
    username :
     "sam",
    price: 199

})


const mynewarraay = [200,400,100,900]

function returnsecondvalue(getarray){
    return getarray[1]
}
//  console.log(returnsecondvalue(mynewarraay));

 console.log(returnsecondvalue([200,400,100,900]));


