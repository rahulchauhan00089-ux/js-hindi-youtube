(function chai(){
    console.log(`DB connected`);
})();
 
// global scope ke pollution se problem hoti hai kai barrr toh toh global scope ke jo variable or declaration hai
// uske problem ko hattane ke lie jo use kiya usee bolte hai iffe 

((name)=>{
    console.log(`db connected two ${name}`);
    
})('rahul')


