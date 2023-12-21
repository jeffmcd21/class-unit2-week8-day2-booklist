
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
app.get("/books", async (req, res) => {
    // Find all of the books
    let books = await Book.find({})
    
    // Render all of the books to index.ejs
    res.render("index.ejs", {
        books: books.reverse()
    })

})

// NEW - GET for the form to create a new book
app.get("/books/new", (req, res) => {
    //res.send("new book")
    res.render("new.ejs")
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
        res.redirect("/books")

    } catch (err) {
        res.send(err)
    } 
})


// Show - GET rendering only one book
app.get("/books/:id", async (req, res) => {
    // find a book by _id
    let foundBook = await Book.findById(req.params.id) // the request params object

    //console.log(foundBook)
    // render show.ejs with the foundBook
    res.render("show.ejs", {
        book: foundBook
    })
})

// Server Listener //
app.listen(PORT, () => console.log(`Listening to port ${PORT}`))