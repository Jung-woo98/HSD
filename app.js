const express = require("express");
const app = express();
const port = 3000;
const mysql = require('./demo_db_connection')();
const connection = mysql.init();
mysql.db_open(connection);

const loginRouter = require("./public/routes/login");
const menuRouter = require("./public/routes/menu");
const joinRouter = require("./public/routes/join");
const join2Router = require("./public/routes/join2");

app.set('views', __dirname + '/public/views');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static('public'));
app.use('/login', loginRouter);
app.use('/menu', menuRouter);
app.use('/join/join_step1', joinRouter);
app.use('/join/join_step2', join2Router);
connection.query('select * from category', 
function (error, results, fields){
    if (error){
        console.log(error);
    }
    console.log(results);
});



app.listen(port, ()=> {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})