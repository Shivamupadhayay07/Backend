const placeorder = (()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("production will start");
            resolve();
        },2000)
       
    })
})
const  startproduction= (()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("production is started ");
            resolve();
        },2000)
       
    })
})
const  printid= (()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("product id is 01");
            resolve();
        },2000)
       
    })
})
const productname = (()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("product name is qsk");
            resolve();
        },2000)
       
    })
})

const  productdesc= (()=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("desc");
            resolve();
        },2000)
       
    })
})











console.log("order is now going to take ")

placeorder()
.then(()=>
{
    console.log("product is in production ");
    return startproduction();
})
.then(()=>
{
    console.log("product id will be ");
    return printid();
})
.then(()=>
{
    console.log("product name will be  ");
    return productname();
})
.then(()=>
{
    console.log("product desc will be  ");
    return productdesc();
})