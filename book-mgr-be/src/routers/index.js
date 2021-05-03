const auth = require('./auth');
const InviteCode = require('./invite-code');

module.exports = (app) =>{
    app.use(auth.routes());
    app.use(InviteCode.routes());
};

