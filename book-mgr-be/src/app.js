const Koa = require('koa');
const koaBody = require('koa-body');

const Body = require('koa-body');

const {connect} = require('./db');

const registerRoutes = require('./routers');

const cors = require('@koa/cors');

const app=new Koa();

connect().then(() => {
    app.use(cors());

    app.use(koaBody());

    registerRoutes(app);
    
   
    app.listen(3000,()=>{
        console.log('启动成功');
    });
    //3000为端口
});





 //将koa包引进来

// //console.log(koa);    //node.js有自己的环境，去终端验证  
// //第一步：node  第二部： REPL Read Eval Print Loop 交互式的解释器 
// //第三步：验证 第四步 .exit为退出

// const app=new koa();

// //通过app.use 注册中间件
// //中间件本质上他就是一个函数
// //context 上下文--当前请求的相关信息都在里面
// app.use((context)=>{
//     console.log(context);

//     //对象的结构
//     const { request:req={} }=context;   //const request=context.request

//     const {url}=req;
// //路由地址
//     if(url === '/user'){
//         context.response.body = 'abcde';

//         return;
//     }

//     context.body = '??';
// });

// //开启一个http服务
// //接受http请求并作出处理，处理完后响应


