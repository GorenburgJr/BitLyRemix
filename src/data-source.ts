import "reflect-metadata"
import { DataSource } from 'typeorm'
import { User } from "./entity/User"
import * as dotenv from 'dotenv'
import { Url } from "./entity/Url"
import { Request } from "./entity/Request"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PSWD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: false,
    entities: [User, Url, Request],
    migrations: [],
    subscribers: [],
})
