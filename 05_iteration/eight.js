const myNums = [1,2,3,]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval ${currval}`);
    
//     return acc+ currval
// },3)

// jo uper likha hai use ko arrow functin se likh rahe hai
 
const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);


const shoppingcart = [
    
    {
        itemName:"js course",
        price: 1999
    },
    {
        itemName:"py course",
        price: 1944
    },
    {
        itemName:"ds course",
        price: 199
    }
]

 const priceTopay = shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(priceTopay);


