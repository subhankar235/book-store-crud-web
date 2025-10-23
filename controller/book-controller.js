const { findByIdAndDelete } = require("../models/book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    //.find({}) means → find all documents (no filter).
    if (allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: 'List of books fetched successfully',
        data: allBooks
      });
    } else {
      res.status(404).json({
        success: false,
        message: 'No books found'
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again'
    });
  }
};

const getSingleBookByid = async (req, res) => {
  try {
    // req.params.id gives you the value of id in the URL.
    const getCurrentBookId = req.params.id;
    const bookDetailsByID = await Book.findById(getCurrentBookId);

    if (!bookDetailsByID) {
      return res.status(404).json({
        success: false,
        message: "Book with this ID isn't found! Try with a different ID"
      });
    }

    res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      data: bookDetailsByID
    });

  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the book",
      error: e.message
    });
  }
};

const addNewBook = async (req, res) => {  
  try {
    // req.body → takes the data the client sent.
    const newBookFormData = req.body;

    // Insert into MongoDB
    const newlyCreatedBook = await Book.create(newBookFormData);

    if (newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newlyCreatedBook,
      });
    }
  } catch (e) {
    console.error(e.message); // log error for debugging
    res.status(500).json({
      success: false,
      message: "Something went wrong while adding the book",
      error: e.message,
    });
  }
};

const updateBook = async (req, res) => {
  try{
  //req.body contains the data sent by the client (usually via POST or PUT request).
  const datainesrt=req.body;
  // This gives you which book to update in the database.
  const getCurrentBookId=req.params.id;

  const upadatedBook=await Book.findByIdAndUpdate(getCurrentBookId,datainesrt)
  }

  catch(e){
    
  }
};
const deleteBook = async (req, res) => {
  try{
  const getCurrentBookId=req.params.id;
  const deleteBook=await Book.findByIdAndDelete(getCurrentBookId);

  if(!deleteBook){
    res.status(404).json({
      success:false,
      message:'book is not found with this id'
    })
  }

  res.status(200).json({
    success:true,
    data:deleteBook
  })
  }

  catch(e){
console.error(e.message); // log error for debugging
    res.status(500).json({
      success: false,
      message: "Something went wrong while adding the book",
      error: e.message
    })
  }
};

module.exports = {
  getAllBooks,
  getSingleBookByid,
  addNewBook,
  updateBook,
  deleteBook
};
