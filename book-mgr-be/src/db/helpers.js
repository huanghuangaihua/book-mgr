const getMeta =() =>{
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

const preSave =function(next) {
    if(this.isNew){
        const ts=Date.now();

        this['meta'].createdAt = ts;
        this['meta'].updateAt = ts;

    }else{
        this['meta'].updateAt = Date.now();

    }
    next();
};

module.exports = {
    getMeta,
    preSave,
};//导出