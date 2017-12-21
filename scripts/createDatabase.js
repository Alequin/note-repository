const DatabaseBuilder = require("./../services/PostgresDatabaseConstructor")

const dbBuilder = new DatabaseBuilder("note-repo")
dbBuilder.dropDb()
dbBuilder.createDb()
