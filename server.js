
// Dependencies

require("dotenv").config()
require("./config/db")
const express = require("express")
const morgan = require("morgan")

// Also see middleware connection below
const methodOverride = require("method-override")

const booksRouter = require("./routes/books");

const app = express();
const { PORT = 3013 } = process.env;
const seedData = require("./models/seed")

const Book = require("./models/Book.js")



// Middleware //
app.use((req, res, next) => {
    req.model = {
        Book,
        seedData
    }
    console.log("middleware")
    next()
})

app.use(morgan("dev"))

app.use(express.urlencoded({ extended: true })) // body parser this is how we get access to req.body

// Let's us use DELETE PUT HTTP verbs
app.use(methodOverride("_method")) 


// Routes and Router //

// app.use(prefix, url, router to execute)
app.use("/books", booksRouter)


// Server Listener //
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))