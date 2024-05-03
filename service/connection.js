const sql = require("mssql");

const config = {
  user: "rootfarmer",
  password: "Farmer12345",
  server: "farmerconnect.database.windows.net", // Sunucu adı veya IP adresi
  database: "farmerconnect",
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
