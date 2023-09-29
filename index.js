//importar pacotes
const express = require("express");
const exhbs = require("express-handlebars");
const session = require("express-session"); //session do user
const FileStore = require("session-file-store")(session); //armazenar a session
const flash = require("express-flash");

const app = express();

//conexão
const conn = require("./db/conn");
