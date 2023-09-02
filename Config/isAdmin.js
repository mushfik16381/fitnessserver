const isAdmin = (req, res, next) => {
    try {
        if(req.role == 'admin'){
            next();
        }else{
            res.status(403).send();
        }
    } catch (error) {
        return res.status(401).json({ success: false, msg: error.message });
    }
}
module.exports = {
    isAdmin,
};
