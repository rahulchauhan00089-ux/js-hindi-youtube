// const tinderUser = new Object()
const tinderUser = {}
 tinderUser.id = "123abc"
 tinderUser.name= "rahulchauhan"
 tinderUser.isLoggedIn= false


// console.log(tinderUser);

const regularuser = {
    email: "rahul@123.com",
    fullName: {
        userFullName: {
            firstName: "rahul",
            lastName: "chauhan"
        }
    }
}
// console.log(regularuser.fullName.userFullName)
const Obj1 ={1:"a",2:"b"}
const Obj2 ={3:"c",4:"d"}
// const Obj3 = Object.assign( {},Obj1,Obj2)
const Obj3 = {...Obj1,...Obj2}

// console.log(Obj3);


const users = [

    {
id:1,
email:" rahul@123.com"
    },

     {
id:1,
email:" rahul@123.com"
    },

     {
id:1,
email:" rahul@123.com"
    }

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));




]


