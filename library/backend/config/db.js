
const mongoose = require("mongoose");
const dns = require("dns");

const connectDB = async () => {
  try {
    // Use Google and Cloudflare DNS for MongoDB SRV lookup
    dns.setServers(["8.8.8.8", "1.1.1.1"]);

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Atlas Connected Successfully");
  } catch (error) {
    console.log("Database Connection Failed");
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;