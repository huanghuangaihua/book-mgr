// const { request } = require("express");

// const { rejects } = require("node:assert");

    const request = (arg, isReject) =>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(isReject) {
                    reject('出错啦');
                    return;
                }
                console.log(arg);
                resolve(arg + 1);
            
            },300);
        });
    };

    //async 函数 返回的是一个promise
    const fn = async () => {
        const res1 =await request(1);
        const res2 =await request(res1);
        const res3 =await request(res2);
        const res4 =await request(res3);
        const res5 =await request(res4);
        const res6 =await request(res5);
        const res7 =await request(res6);
        console.log(res7);

    };

// const fn = async function(){

// };

//Promise
//回调函数

//一个接口 要拿到数据 跑5个前置接口

// const request = (arg,cb)=>{
//     setTimeout(() => {
//         console.log(arg);
//         cb(arg + 1);
    
//     },1000);
// };

// request(1,function(res) {
//     console.log('res',res);
// });


// const request = (arg) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             console.log(arg);
//             resolve(arg + 1);

//         },300);
//     });
// };

// request(1)
//     .then((res1) => {
//         return request(res1);
//     })
//     .then((res2) => {
//         return request(res2);
//     })
//     .then((res3) => {
//         return request(res3);
//     })
//     .then((res4) => {
//         return request(res4);
//     })
//     .then((res5) => {
//         console.log('res5:',res5);
//     });