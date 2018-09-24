const urlEncode = require('body-parser').urlencoded({ extended: true })
const HuskyCtrl = require('../../controllers/huskyfeed/husky.controller') 
module.exports = (app) => {
    const Wraper = require('../../infras/wraper.infras.js')
    app.post('/husky/newhusky',urlEncode,Wraper(HuskyCtrl.createHusky))
    app.get('/husky/getallhusky',Wraper(HuskyCtrl.findHusky))

}