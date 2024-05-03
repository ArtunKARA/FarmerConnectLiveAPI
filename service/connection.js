const sql = require("mssql");

const config = {
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  server: env.DB_HOST, // Sunucu adı veya IP adresi
  database: env.DB_DATABASE,
  options: {
    trustServerCertificate: true,
  },
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log("MSSQL veritabanına başarıyla bağlanıldı.");
    return pool;
  })
  .catch((err) => {
    console.error("MSSQL veritabanına bağlanırken bir hata oluştu:", err);
    process.exit(1);
  });

module.exports = {
  sql,
  poolPromise,
};
