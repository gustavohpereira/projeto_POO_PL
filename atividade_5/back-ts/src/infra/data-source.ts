import { DataSource, getRepository } from 'typeorm';

const appDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "gerso",
    entities:[`${__dirname}/entities/*.{ts,js}`],
    synchronize: true
})

export default appDataSource