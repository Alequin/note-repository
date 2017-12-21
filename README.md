# Notes Repo

## To Run

* Make a called "settings.js" in the root directory. This file contains a number of required variables. A working example would look like:
```
  const dbName = "noteRepo"
  export const databaseInfo = {
    name: dbName,
    path: "postgres://localhost/" + dbName
  }

  export const serverVariables = {
    port: 5000
  }
```

* Activate helper aliases (not required):

```
  source project_aliases.sh
```

* Build required files:

```
  > npm run build-es6
  > npm run build-webpack
  > npm run build-database
```

* Run server
```
  > npm start
```
