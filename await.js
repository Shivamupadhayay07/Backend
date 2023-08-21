function delay (time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>
        {
            resolve();
            
        },time)
    })
}




async function placeorder (){
    await delay (2000);
    console.log("production start")

    
}

async function startproduction (){
    await delay (2000);
    console.log("production start")

    
}

async function productid (){
    await delay (2000);
    console.log("production start")

    
}

async function productname (){
    await delay (2000);
    console.log("production start")

    
}

async function productdesc (){
    await delay (2000);
    console.log("production start")

    
}

async function main ()
{
    
    await  placeorder();
    console.log("production has satrted ");
    await  startproduction();
    console.log("product id is ");
    await  productid();
    console.log("product name is ");
    await  productname();
    console.log("product desc is ");
    await  productdesc();
    console.log("production  is finished ");

}


main();


