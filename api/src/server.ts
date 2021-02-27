// import 'reflect-metadata'
// import express from 'express' // os tres pontinhos significam que a tipagem da biblioteca esta em outra bibliteca
// // import nao é entendido pelo node, se rodar o arquivo da erro
// import "./database" // importa o index.ts
// import { router } from './routes';

// const app = express()

// // app.get('/', (request, response) => {
// //     return response.json({message: 'Hello World - NLW04'});
// // });

// // app.post('/', (request, response) => {
// //     // recebeu dados pra salvar
// //     return response.json({message: "Os dados foram salvos com sucesso"})
// // });

// app.use(express.json())
// app.use(router)


import {app} from "./app"

app.listen(3333, () => console.log('Server is running')) // cria o servidor