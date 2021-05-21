const dotenv = require('dotenv');
const express = require("express");
const cors = require('cors');
dotenv.config({ path: './config.env' });
require("./database/db");
const PORT = process.env.PORT ||5500;

const app= express();
const studentRoute = require("./routes/studentRoute");
app.use(express.json());
app.use(cors());
app.use('/api',studentRoute);

app.listen(PORT, () =>{
    console.log(`Server is running at ${PORT}`)
});



// app.get("/student", (req, res) =>{
//     res.send(" hello guys...")
// })

// app.post("/student", async(req,res) =>{
//     try {
//         const user = new Student(req.body);
//         const createData= await user.save();
//         console.log(createData)
//         res.send(createData);
//     } catch (err) {
//         res.send(err);
//         // res.send("helloooo")  
//     }
// })


// app.get("/student", async(req, res) =>{
//     try {
//         const getData= await Student.find();
//         res.send(getData)
//     } catch (err) {
//         res.send(err)
//     }
// })

// app.get("/student/:id", async(req,res) =>{
//     try {
//         const _id = req.params.id;
//         const getOnlyOne = await Student.findById(_id, req.body,{
//             name :true
//         });
//         res.send(getOnlyOne);
//     } catch (e) {
//       console.log(e)
//     }
// })

// app.patch("/student/:id", async(req,res) =>{
//     try {
//         const _id = req.params.id;
//         const updateStudent = await Student.findByIdAndUpdate(_id, req.body,{
//             new :true
//         });
//         if(!updateStudent){
//             res.send("error")
//         }
//         res.send(updateStudent);
//     } catch (e) {
//       console.log(e)
//     }
// })

// app.delete("/student/:id", async(req,res) =>{
//     try {
//         const _id = req.params.id;
//         const deleteData = await Student.findByIdAndDelete(_id);
//         if(!deleteData){
//             res.send("not found ... Please check again...")
//         }

//         res.send({"msg":"deleted ur data sucessfully"});
//     } catch (e) {
//         console.log(e);
        
//     }
// })
