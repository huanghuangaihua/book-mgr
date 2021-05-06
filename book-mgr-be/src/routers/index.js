const auth = require('./auth');
const InviteCode = require('./invite-code');
const book = require('./book');

module.exports = (app) =>{
    app.use(auth.routes());
    app.use(InviteCode.routes());
    app.use(book.routes());
};

