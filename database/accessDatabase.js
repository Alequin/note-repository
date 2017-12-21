import PostgresConnector from "./../services/PostgresConnector.js"
import {databaseInfo} from "./../settings.js"
const accessDatabase = new PostgresConnector(databaseInfo.path)
export default accessDatabase
