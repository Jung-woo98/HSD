const express = require('express');
const router = express.Router();

router.get('/', (req,res)=> {
    res.render('menu_list.html')
})

module.exports = router;