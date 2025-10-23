const express=require('express');
const{getAllBooks,getSingleBookByid,addNewBook,updateBook,deleteBook}=require('../controller/book-controller')
//create express router
const router=express.Router();


//all routes that  realted to books only--
router.get('/get',getAllBooks);
router.get('/get/:id',getSingleBookByid);
router.post('/add',addNewBook);
router.put('/update/:id',updateBook)
router.delete('/delete/:id',deleteBook);

module.exports=router;
