import Express from 'express';
import appDataSource from "./infra/data-source"

const app = Express()

appDataSource.initialize().then(() => {
    console.log("Database initialized succesfully");
    app.listen(3000, () => {
        console.log("Server running on http:/localhost:3000")
    })    
})