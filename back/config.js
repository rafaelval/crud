const config = {
  appConfig: {
    host: process.env.APP_HOST,
    port: process.env.APP_PORT
  },
  dbConfig: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbUsername: process.env.DB_USERNAME,
    dbPass: process.env.DB_PASS
  }
}

module.exports = config