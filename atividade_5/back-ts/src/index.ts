import Express from 'express';
import appDataSource from "./infra/data-source"
import { cliente as clienteRouter } from './routes/cliente.router';
import { produto as produtoRouter } from './routes/produto.router';
import { servico as servicoRouter } from './routes/servico.router';
import { pet as petRouter } from './routes/pet.router';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = Express()
app.use(bodyParser.json())
app.use(cors());

appDataSource.initialize().then(() => {
    console.log("Database initialized succesfully");
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000")
    })    
})

app.use('/cliente', clienteRouter)
app.use('/produto', produtoRouter)
app.use('/servico', servicoRouter)
app.use('/pet', petRouter)