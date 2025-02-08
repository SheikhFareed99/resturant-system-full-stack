const sql = require("mssql");
require("dotenv").config();

const config = {
    user: process.env.DB_USER || "",  
    password: process.env.DB_PASSWORD || "",
    server: process.env.DB_SERVER || "localhost",  // Change to "localhost" or "127.0.0.1"
    database: process.env.DB_NAME || "unii",
    port: 1433,  // Explicitly set port
    options: {
        trustServerCertificate: true, // Required for self-signed certificates
        enableArithAbort: true,
        encrypt: false, // Change to true if using Azure SQL
    },
};

async function connectDB() {
    try {
        let pool = await sql.connect(config);
        console.log("✅ Connected to SQL Server");
        return pool;
    } catch (err) {
        console.error("❌ Database Connection Failed:", err);
        process.exit(1);
    }
}

module.exports = connectDB;
