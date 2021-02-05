const express = require ('express');
const router = express.Router();

//@route      GET api/auth
//@desc       Get logged in user
//@access     Privete
router.get('/', (req, res)=>{
 res.send('Get logget in user')
});

//@route      POST api/auth
//@desc       Auth user & get token
//@access     Public
router.post('/', (req, res)=>{
 res.send('Log in user')
});


module.exports = router