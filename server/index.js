const cookieParser = require('cookie-parser');
const express = require('express')
const app = express()
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')




mongoose.connect(process.env.MONGO_DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
  .then(() => console.log('DB Connected!'))
  .catch((e)=> console.log(`Error connecting to DB: ${e}`));


app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
app.use(cors())


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server listening on PORT: ${PORT}`);
})