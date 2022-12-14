function checkAuthStatus(req, res, next){
    const uid = req.session.uid;

    if(!uid){
        return next(); //Burda bir şey döndürme ama uygulmayı da kilitleme devam et diyoruz
    }

    res.locals.uid = uid;
    res.locals.isAuth = true;
    //Admin check
    res.locals.isAdmin = req.session.isAdmin;
    next();
}

module.exports = checkAuthStatus;