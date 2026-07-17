const useremail ="@rahul"

if(useremail){
    console.log("got user email");
}
else{
    console.log("user email not found");
}

// falsy value

// false, 0 ,-0,bigint(0n), "", null, undefined, NaN

// truthy values 
//"0",'false',[],{},function(){},true,1,-1,3.14,Infinity,-Infinity,""

// if(useremail.length===0){
//     console.log("array is empty")

// }


const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish coalescing operator(??): null undefined 
let val1;
// val1 = 5 ?? 10
// val1 = null??10

val1 = undefined ?? 10
val1 = null ?? 56 ?? 15

console.log(val1);

// terniary operator 
//  condition ? true : false
 const iceteaprice = 100;
 iceteaprice>80 ? console.log("true"):console.log("false");
 
 