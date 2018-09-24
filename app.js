const express = require('express')
const port = process.env.PORT || 3001;
const http = require("http")
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require("./routes/root.route")
const dbConfig = require('./config/database.config')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw({ inflate: true, type: 'application/json' }))
//app.use(connectiondata.connectDatabase)
//app.use(Token.requireToken)
app.use(express.static(__dirname + '/public'))
var server = http.createServer(app).listen(port,()=>{
    console.log("server running on port:"+port)
})
mongoose.Promise = global.Promise;
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Origin, X-Auth-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
mongoose.connect(dbConfig.url)
app.use('/api', routes)
