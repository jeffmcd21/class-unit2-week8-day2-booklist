
//Dependencies


const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.on("error", (err) => console.log(err.message + "Error Found"))
mongoose.connection.on("connected", () => console.log("Locked and Loaded"))
mongoose.connection.on("disconnected", () => console.log("Service Dropped"))
