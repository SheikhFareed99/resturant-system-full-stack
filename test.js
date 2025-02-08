const { connectDB } = require('./db');

async function testConnection() {
    try {
        await connectDB();
        console.log('Database connection test successful!');
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
}

testConnection();
