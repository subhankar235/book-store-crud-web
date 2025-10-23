const mongoose=require('mongoose');


const bookSchema=new mongoose.Schema({

// type → what kind of data (String, Number, Date, etc.)

// required → makes the field compulsory

// trim → cleans spaces in strings in front " Harry Potter " → "Harry Potter"

// maxLength → sets maximum allowed length

  title:{
    type:String,
    required:[true,'book title is required'],
    trim:true,
    maxLength:[100,'book title cant be more than 100 chracter']
  },

  author:{
    type:String,
    required:[true,'author name is required'],
    trim:true,
    
  },
  year:{
    type:Number,
    required:[true,'publication year is required'],
    min:[1000,'year must be atleast 1000'],
    max:[new Date().getFullYear(),'year cant be in the future']
  }
  ,


  createdAt:{
    type:Date,
    default:Date.now
  }
});

module.exports=mongoose.model('book',bookSchema)