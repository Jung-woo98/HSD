const express = require('express');
const router = express.Router();

router.post('/', (req,res)=> {
    res.render('join_step2.html')
})

module.exports = router;