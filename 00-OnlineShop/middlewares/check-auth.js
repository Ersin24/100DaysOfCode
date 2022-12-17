function checkAuthStatus(req, res, next){
    const uid = req.session.uid;

    if(!uid){
        return next(); //Burda bir şey döndürme ama uygulmayı da kilitleme devam et diyoruz
    }

    res.locals.uid = uid;
    res.locals.isAuth = true;
    next();
}

module.exports = checkAuthStatus;