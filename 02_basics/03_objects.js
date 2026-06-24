// singleton

//object literals


const mysym = Symbol("key1")

const jsuser = {
    name : "Rahul Chauhan",
   [ mysym]:"mykey1",
    age: 18,
    location: "India",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    email : "rahul@123.com"

}

    //  console.log(jsuser.email)
    //  console.log(jsuser["email"])
    //  console.log(jsuser["email"])
    //  console.log( jsuser[mysym])

     jsuser.email = "rahulchauhan.com"
    // Object.freeze(jsuser)
    jsuser.email = "hiteshchaudhary.com"
    console.log(jsuser)

    jsuser.greeting = function(){
        console.log("Hello js  Chauhan");
    }
    console.log(jsuser.greeting());

    jsuser.greetingTwo = function(){
        console.log("Hello js  Chauhan");
    }
    console.log(jsuser.greetingTwo());





