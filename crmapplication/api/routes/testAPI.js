var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.get('/Login',login);

function login(req,res)
{
    var username= req.query.username;
    var password=req.query.password;

    if(username.toLowerCase()=="hasan" && password=="1234")
        res.send("true");

    res.send("false");
}

module.exports = router;