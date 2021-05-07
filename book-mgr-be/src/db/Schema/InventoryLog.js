const mongoose = require('mongoose');

const { getMeta,preSave } = require('../helpers');

const LogSchema = new mongoose.Schema({
    type:String,
    num:Number,
    user:String,

    meta:getMeta(),
    
});

LogSchema.pre('save',preSave);

mongoose.model('InventoryLog',LogSchema);
