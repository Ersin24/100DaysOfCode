function createUserSession(req, user, action) {
    //User id
    req.session.uid = user._id.toString();
    //Admin check
    req.session.isAdmin = user.isAdmin;
    req.session.save(action);
}

function destroyUserAuthSession(req){
    req.session.uid = null;
}

module.exports = {
    createUserSession: createUserSession,
    destroyUserAuthSession: destroyUserAuthSession,
}