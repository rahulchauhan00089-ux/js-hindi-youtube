const user = {
    username : "rahulchauhan",
    loginCount:8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("got user details from database");
        
        // console.log(`username:${this.username}`);
        console.log(this);
        
        

    }

}


// console.log(user.username);

// console.log(user.getUserDetails());
// console.log(this);

function User(username,logincount,isLoggedIn){
    this.username = username
    this.loginCount= logincount
    this.isLoggedin = isLoggedIn
    this.greeting = function(){
        console.log(`welcome${this.username}`);
        
    }

return this

}


const userOne = new User("rahulchauhan",12,true)
const userTwo = new User("dsp",8,false)
console.log(userOne.constructor);

console.log(userTwo);




