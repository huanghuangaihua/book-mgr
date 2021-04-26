const mongoose = require('mongoose');   //引进mongoose

//给哪个数据库的
//哪个集合
//添加是什么格式的文档

//schema   映射了Mongodb下的集合，并且它的内容就是集合下文档的构成

//Modal  可以理解成是根据schema生成的一套方法的集合，这套方法用来操作Mongodb集合和集合下的文档

const UserSchema =new mongoose.Schema({
    nickname:String,
    password:String,
    age:Number,
});

const UserModal = mongoose.model('User',UserSchema);


const connect =()=>{
    //连接数据库


    
    mongoose.connect('mongodb://127.0.0.1:27017/book-mgr');//默认部署本地连接的地址（端口）
    //打开本地mongodb数据库
    //当数据库被打开的时候 做的一些事情
    mongoose.connection.on('open',()=>{
        console.log('连接成功！'); //回调函数


        //创建文档
        const user=new UserModal({  //构造函数
            nickname:'黄爱华',
            password:'123456',
            age:18,
        });

        user.age=100;

        //保存，同步到Mongodb
        user.save();
    });
};

connect();//调用