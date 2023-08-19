// const data = [
//     {
//         id:1,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:2,
//         name:"range rover",
//         carmodel:"classic",
//         engine:"bs7",
//     },
//     {
//         id:3,
//         name:"range rover",
//         carmodel:"premium",
//         engine:"bs9",
//     },
//     {
//         id:4,
//         name:"BMW",
//         carmodel:"x6",
//         engine:"bs7",
//     },
//     {
//         id:5,
//         name:"BMW",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:6,
//         name:"BMW",
//         carmodel:"x9",
//         engine:"bs9",
//     },
//     {
//         id:7,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:8,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:9,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:10,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:11,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:12,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:13,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:14,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:15,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:16,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:17,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:18,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:19,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:20,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:21,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:22,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
//     {
//         id:24,
//         name:"range rover",
//         carmodel:"sportz",
//         engine:"bs8",
//     },
// ]

// console.log(data)



   

// const placeorder = (callback)=>{
//     setTimeout(()=>{
//         console.log("order is taken")
//         callback();
//     },2000)
// }
// const printProduction = (callback)=>{
//     setTimeout(()=>{
//         console.log("Production started")
//         callback();
//     },2000)
// }
// const printLinux = (callback)=>{
//     setTimeout(()=>{
//         console.log("Linux started")
//         callback();
//     },2000)
// }
// const printGithub = (callback)=>{
//     setTimeout(()=>{
//         console.log("Github started")
//         callback();
//     },2000)
// }

// const printHTML = (callback)=>{
//     setTimeout(()=>{
//         console.log("HTML started")
//         callback();
//     },2000)
// }
// const printCSS = (callback)=>{
//     setTimeout(()=>{
//         console.log("CSS started")
//         callback();
//     },2000)
// }
// const printJS = (callback)=>{
//     setTimeout(()=>{
//         console.log("JS started")
//         callback();
//     },2000)
// }
// const printReact = (callback)=>{
//     setTimeout(()=>{
//         console.log("React started")
//         callback();
//     },2000)
// }

// console.log("Order is now going to take");
// placeorder(()=>{
//     console.log("pass to production");
//     printProduction(()=>{
//         console.log("passing to Linux");
//         printLinux(()=>{
//             console.log("pass to github");
//             printGithub(()=>{
//                 console.log("pass to HTML");
//                 printHTML(()=>{
//                     console.log("pass to CSS");
//                     printCSS(()=>{
//                         console.log("pass to JS");
//                         printJS(()=>{
//                             console.log("pass to react");
//                             printReact(()=>{
//                                 console.log("production ended");
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })




const makingburger = (callback)=>{
    setTimeout(() => {
        console.log("making burger")
        callback()
    }, 2000);
}

const gerbread = (callback)=>{
    setTimeout(() => {
        console.log("adding bread")
        callback()
    }, 2000);
}

const gettikki =( bread ,callback)=>{
    setTimeout(() => {
        console.log("adding alloo")
        callback()
    }, 2000);
}

const getsause = (bread ,alloo ,callback )=>{
    setTimeout(() => {
        console.log("adding allo")
        callback()
    }, 2000);
}