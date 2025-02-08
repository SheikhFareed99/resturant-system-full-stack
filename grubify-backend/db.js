const sql = require('mssql');

// Database configuration for your SQL Server Express instance
const config = {
    user: '', // Leave empty for Windows Authentication
    password: '', // Leave empty for Windows Authentication
    server: 'FAREED-PC\\SQLEXPRESS', // Your SQL Server instance
    database: 'unii', // Replace with your actual database name
    options: {
        encrypt: false, // Set to true for Azure
        trustServerCertificate: true, // Required for local development
    }
};

// Function to connect to the database
async function connectDB() {
    try {
        const pool = await sql.connect(config);
        console.log('Connected to MSSQL Database');
        return pool;
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
}

// Export connection
module.exports = { connectDB, sql };