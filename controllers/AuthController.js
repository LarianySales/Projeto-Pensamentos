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

    if (password != confirmpassword) {
      request.flash("message", "As senhas não conferem,tente novamente");
      return response.render("auth/register");
    }

    //VALIDAÇÃO NOME
    // if(name === ''||!name||name.lenght< 3){}
    //VALIDAÇÃO DE EMAIL- VERIFICAR SE JÁ ESTÁ CADASTRADO
    const checkIfUserExist = await User.findOne({ where: { email: email } });
    if (checkIfUserExist) {
      request.flash("message", "O e-mail já está em uso");
      response.render("auth/register");
      return;
    }

    //CRIPTOGRAFAR A SENHA SO USUÁRIO - antes de verificar email
    //criar o rash -padrões de criptografia que não pode ser descriptografados
    const salt = bcrypt.genSaltSync(10);
    //salto sincronizado kkkkkk /sal sincronizado
    const hashedPassword = bcrypt.hashSync(password, salt);

    //CRIAR O OBJ USUÁRIO PARA CADASTRO  NO BANCO
    const user = {
      name,
      email,
      password: hashedPassword,
    };

    //TRY - PARA INSERIR O USER NO BANCO E TRABALHAR COM SESSÃO
    try {
      const createdUser = await User.create(user);
      request.session.userId = createdUser.id;

      request.flash("message", "Cadastro realizado com sucesso");
      request.session.save(() => {
        response.redirect("/");
      });

    } catch (error) {
      console.log(error);
    }
  }
  static async logout(request, response){
    request.session.destroy()
      response.redirect('/login')

  }
};
