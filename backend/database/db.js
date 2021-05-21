const dotenv= require('dotenv');
const mongoose= require('mongoose');

dotenv.config({path: '../config.env'});
let DB = process.env.MONGODB_URI;
mongoose.connect(DB, {
    dbName:process.env.DBNAME,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(() => console.log("connected database"))
.catch((e) => console.log(e));