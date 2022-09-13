const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    res.render('join_step1.html')
})

module.exports = router;