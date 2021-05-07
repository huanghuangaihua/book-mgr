const auth = require('./auth');
const InviteCode = require('./invite-code');
const book = require('./book');
const inventoryLog = require('./inventory-log');
const user = require('./user');

module.exports = (app) =>{
    app.use(auth.routes());
    app.use(InviteCode.routes());
    app.use(inventoryLog.routes());
    app.use(book.routes());
    app.use(user.routes());
};

