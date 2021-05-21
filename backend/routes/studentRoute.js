const express = require("express");
const Student = require('../model/student');
const router = express.Router();

// Create data
router.post("/student", async (req, res) => {
    try {
        const user = new Student(req.body);
        const createData = await user.save();
        res.send(createData);
    } catch (err) {
        res.send(err);
    }
})

// Get Data
router.get("/student", async (req, res) => {
    try {
        const getData = await Student.find();
        res.send(getData)
    } catch (err) {
        res.send(err)
    }
})

// Get one user
router.get("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const getOnlyOne = await Student.findById(_id, req.body, {
            name: true
        });
        res.send(getOnlyOne);
    } catch (err) {
        res.send(err)
    }
})

// Update user
router.patch("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        if (!updateStudent) {
            res.send("error")
        }
        res.send(updateStudent);
    } catch (err) {
        res.send(err)
    }
})

// Delete user
router.delete("/student/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const deleteData = await Student.findByIdAndDelete(_id);
        if (!deleteData) {
            res.send("not found ... Please check again...")
        }
        res.send({ "msg": " User deleted sucessfully" });
    } catch (err) {
        res.send(err)
    }
})

module.exports = router;