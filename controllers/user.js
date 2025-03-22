const { model } = require("mongoose")
const User = require("../models/userModel")

async function handleGetAllUser(req,res) {
    const allUserdb = await User.find({})
    return res.json(allUserdb)
}

async function getUserById(req,res) {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user)
}

async function updateUserById(req,res) {
    await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"})
    return res.json({ status: "success" })
}

async function deleteUserById(req,res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({status: "Success"})
}

async function handleCreateNewUser(req,res) {
    console.log("Received Body:", req.body); // Debugging log

    const body = req.body;

    if (!body.firstName || !body.lastName || !body.email || !body.gender || !body.jobTitle) {
        return res.status(400).json({ msg: "All fields are required" });
    }

    try {
        const result = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            gender: body.gender,
            jobTitle: body.jobTitle,
        });

        console.log("Result:", result);
        return res.status(201).json({ msg: "Success", id:result._id });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }

}



module.exports = {
    handleGetAllUser,
    getUserById,
    updateUserById,
    deleteUserById,
    handleCreateNewUser,
    
}