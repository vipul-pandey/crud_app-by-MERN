const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email:{
        type:String,
        required: true
    },
    phone:{
        type: Number,
        required:true,
        minLength: 10
    },
    gender:{
        type:String,
        required:true
    },
    password:{    
        type:String,
        required:true
    },
})

const Student = new mongoose.model("Student", studentSchema);

module.exports= Student;