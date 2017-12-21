import PostgresDatabaseConstructor from "./../services/PostgresDatabaseConstructor"
import {databaseInfo} from "./../settings.js"
const constructDatabase = new PostgresDatabaseConstructor(databaseInfo.name, true)
export default constructDatabase
