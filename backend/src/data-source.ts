import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { LibraryStock } from "./entity/LibraryStock"
import { Category } from "./entity/Category"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "library",
    synchronize: true,
    logging: true,
    entities: [User, LibraryStock, Category],
    migrations: [],
    subscribers: [],
})
