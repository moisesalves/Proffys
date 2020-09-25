//Servidor
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

//Configurar o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express: server,
    noCache: true, //desativa o cache
})

//Inicio e Configuração do servidor
server
//Receber os dados do req.body
.use(express.urlencoded({ extended:true }))
//Configurar arquivos estáticos (imagens, css, scripts)
.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding) 
.get("/study", pageStudy)
.get("/give-classes",pageGiveClasses)
.post("/save-class",saveClasses)
//start do servidor 
.listen(5500)