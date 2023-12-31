
// // DEPENDENCIES

// const express = require("express")
// const router = express.Router()


// // Routes and Router - INDUCESS//

// // INDEX Route - GET render all of the books
// router.get("/", async (req, res) => {
//     // Find all of the books
//     let books = await req.model.Book.find({})
    
//     // Render all of the books to index.ejs
//     res.render("index.ejs", {
//         books: books.reverse()
//     })

// })

// // NEW - GET for the form to create a new book
// router.get("/new", (req, res) => {
//     //res.send("new book")
//     res.render("new.ejs")
// })

// // DELETE Route
// router.delete("/:id", async (req, res) => {
//     try {
        
//         // Find a book and then delete
//         let deletedBook = await req.model.Book.findByIdAndDelete(req.params.id)
//         //console.log(deletedBook)
//         // Redirect back to the index
//         res.redirect("/")
//     } catch (error) {
//         res.status(500).send("We have and issue")
//     }
// })


// // UPDATE
// router.put("/:id", async (req, res) => {
    
//     try {
//         // handle our checkbox
//         if (req.body.completed === "on") {
//             req.body.completed = true
//         } else {
//             req.body.completed = false
//         }
//         // Then find by id and update with the req.body
//         // findByIdAndUpdate - id , data to update, options
//         let updatedBook = await req.model.Book.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             {
//                 new: true
//             }
//         )
    
//         // redirect to the show route with the updated book
//         res.redirect(`/${updatedBook._id}`)
        
//     } catch (error) {
//         res.send("something went wrong in this route")        
//     }
// })





// // Create - POST
// router.post("/", async (req, res) => {
    
//     try {
//         if (req.body.completed === "on") {
//             // if checked
//             req.body.completed = true
//         } else {
//             // if not checked
//             req.body.completed = false
//         }
//         //res.send(req.body)
//         let newBook = await req.model.Book.create(req.body)
//         res.redirect("/")

//     } catch (err) {
//         res.send(err)
//     } 
// })


// // EDIT Route

// router.get("/edit/:id", async (req, res) => {
//     try{
//         // Fund the book to edit
//         let foundBook = await req.model.Book.findById(req.params.id)
//         res.render("edit.ejs", {
//             book: foundBook
//         })
//     } catch (error) {
//         res.send("You need to fix me")
//     }
// })

// // Seed - GET
// router.get("/seed", async (req, res) => {
//     try {
//         // delete everything in the database
//         await Book.deleteMany({})
//         // Create data in the database
//         await Book.create(
//            seedData
//         )
//         // redirect back to the index
//         res.redirect("/")
//     } catch (error) {
//         res.send("something went wrong with your seeds")
//     }
// })


// // Show - GET rendering only one book
// router.get("/:id", async (req, res) => {
//     // find a book by _id
//     let foundBook = await req.model.Book.findById(req.params.id) // the request params object

//     //console.log(foundBook)
//     // render show.ejs with the foundBook
//     res.render("show.ejs", {
//         book: foundBook
//     })
// })


// // Export our router
// module.exports = router










//----------------------------

/**
 * Dependencies
 */
const express = require("express")
const router = express.Router()

// bring in our controller
const bookController = require("../controllers/books");

/**
 * Routes INDUCESS
 */
router.get("/", bookController.index)
router.get("/new", bookController.newForm)
router.delete("/:id", bookController.destroy)
router.put("/:id", bookController.update)
router.post("/", bookController.create)
router.get("/edit/:id", bookController.edit)
router.get("/seed", bookController.seed )
router.get("/:id", bookController.show)

// Export our router
module.exports = router