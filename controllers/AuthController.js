const User = require("../models/User");

const bcrypt = require("bcryptjs"); //CRIPTOGRAFAR A SENHA

module.exports = class AuthController {
  static async login(request, response) {
    return response.render("auth/login");
  }
  static async register(request, response) {
    return response.render("auth/register");
  }
  static async registerPost(request, response) {
    const { name, email, password, confirmpassword } = request.body;

    if(password != confirmpassword){
request.flash('message','As senhas não conferem,tente novamente')
return response.render('auth/register')
    }
    //VALIDAÇÃO DE EMAIL- VERIFICAR SE JÁ ESTÁ CADASTRADO

    //CRIPTOGRAFAR A SENHA SO USUÁRIO

    //CRIAR O OBJ USUÁRIO PARA CADASTRO  NO BANCO

    //TRY - PARA INSERIR O USER NO BANCO E TRABALHAR COM SESSÃO
  }
};
