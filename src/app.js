// import dotenv from 'dotenv'
// // import { resolve } from 'path'

// dotenv.config()

require('dotenv').config()

// import './database'

import mongoose from 'mongoose'

import express from 'express'
import taskRoutes from './routes/task'
// import userRoutes from './routes/user'
// import tokenRoutes from './routes/token'
// import alunoRoutes from './routes/aluno'
// import uploadRoutes from './routes/upload'

// Configurando o arquivo em formato de classe

class App {

  constructor() {
    this.app = express()
    this.middlewares()
    this.database()
    this.routes()
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.json())
    // this.app.use(express.static(resolve(__dirname, '..', 'uploads')))
  }

  routes() {
    this.app.use('/', taskRoutes)
    // this.app.use('/users', userRoutes)
    // this.app.use('/tokens', tokenRoutes)
    // this.app.use('/alunos', alunoRoutes)
    // this.app.use('/uploads', uploadRoutes)
  }

  database() {
    // criando conexão com banco de dados
    mongoose.connect('', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', () => console.log('mongoose connected successfully'))
  }
}

// exportando a classe instanciada
export default new App().app // exportando o express em si