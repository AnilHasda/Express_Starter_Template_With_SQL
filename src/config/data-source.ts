import {DataSource} from "typeorm";
import path from "path";
import {config} from "dotenv";
config();
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.HOST,
    port: parseInt(process.env.DB_PORT || "6543"),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities:[path.join(__dirname,"../entities/*.ts")],
    logging: true,
});
