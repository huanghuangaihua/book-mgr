const getMate =() =>{
    return{
        createdAt:{
            type:Number,
            default:(new Date()).getTime(),//时间戳
        },
        updateAt:{
            type:Number,
            default:(new Date()).getTime(),//创建时候的时间戳
        },
    };
};
module.exports = {
    getMate,
};//导出