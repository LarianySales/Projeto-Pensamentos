const Tought = require('../models/Thought')
const User = require('../models/User')

module.exports = class ToughtController{
 static async showThoughts( request,response){
  return response.render('toughts/home')
 }
}