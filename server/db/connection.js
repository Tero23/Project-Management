require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });
  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold);
};

// mongoose.connect(
//   process.env.MONGO_URL,
//   {
//     useNewUrlParser: true,
//   },
//   () => {
//     console.log("DB Connection successfull!");
//   }
// );

module.exports = connectDB;
