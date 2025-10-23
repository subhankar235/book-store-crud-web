const mongoose=require('mongoose')

const connectToDB=async()=>{
  try{
    await mongoose.connect(
       "mongodb+srv://sanun5778:sanun5778@cluster0.sh4glms.mongodb.net/myAppDB"
    )
    console.log("mongo is connected successfuly")
    
  }
catch(error){

  console.error("mongodb coonection failed",error);
  console.error("mongodb connection failed",error);
  process.exit(1);
}

}


module.exports=connectToDB;
