require('./Schema/User');
require('./Schema/InviteCode');//进入文件
const mongoose = require('mongoose');   //引进mongoose

const connect = () => {

    return new Promise((resolve) => {

    
    //连接数据库
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');//默认部署本地连接的地址（端口）
    //打开本地mongodb数据库
    //当数据库被打开的时候 做的一些事情
    mongoose.connection.on('open',()=>{
        console.log('连接数据库成功！'); //回调函数
    
       resolve();
    });
    });
};

module.exports = {
    connect,
}