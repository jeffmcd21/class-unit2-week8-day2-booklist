
// Dependencies

require("dotenv").config()
require("./config/db")
const express = require("express")
const morgan = require("morgan")

const app = express();
const { PORT = 3013 } = process.env;

const Book = require("./models/Book.js")



// Middleware //
app.use(morgan("dev"))

app.use(express.urlencoded({ extended: true })) // body parser this is how we get access to req.body



// Routes and Router //

// INDEX Route - GET render all of the books


// NEW - GET for the form to create a new book
app.get("/books/new", (req, res) => {
    res.send("new book")
})


// Create - POST
app.post("/books", async (req, res) => {
    
    try {
        if (req.body.completed === "on") {
            // if checked
            req.body.completed = true
        } else {
            // if not checked
            req.body.completed = false
        }
        //res.send(req.body)
        let newBook = await Book.create(req.body)
        res.send(newBook)

    } catch (err) {
        res.send(err)
    }
})


// SHOW Route - GET rendering only one book


// Server Listener //
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))