const sql = require("mssql");
const connectDB = require("./db"); // Import database connection

async function fetchData() {
    let pool = await connectDB();

    try {
        let result = await pool.request().query("SELECT * FROM Customers");
        console.log("📌 Customer Records:", result.recordset);
    } catch (err) {
        console.error("❌ Query Error:", err);
    } finally {
        sql.close();
    }
}

fetchData();
