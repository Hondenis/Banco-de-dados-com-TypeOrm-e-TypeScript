import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "hondenis",
    database: "magicshoes",
    entities: ["src/entity/**.ts"],
    synchronize: true,
    dropSchema: false,
    logging: false
});
