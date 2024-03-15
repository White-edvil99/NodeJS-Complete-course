const User = require("../models/userModel");

async function handleGetAllUsers(req, res){
    const dbAllUsers = await User.find({});
    return res.json(dbAllUsers)
}

async function handleGetUserByID(req,res){
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "user not found.."})
    return res.json(user);
}

async function handleUpdateUserByID(req,res){
    await User.findByIdAndUpdate(req.params.id, { LastName: "changed" });
    return res.json({ status: "User Updated succesfully" });
}

async function handleDeleteUserById(req, res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({ Status: "user deleted succesfully" });
}

async function handleCreateNewUser(req, res){
    const body = req.body;
    if (
      !body ||
      !body.first_name ||
      !body.last_name ||
      !body.email ||
      !body.gender ||
      !body.job_title
    ) {
      return res.status(400).json({ msg: "all field are required" });
    }
    //creating a user
    const result = await User.create({
      FirstName: body.first_name,
      LastName: body.last_name,
      Gender: body.gender,
      Email: body.email,
      JobTitle: body.job_title,
    });
    console.log("result: ", result);
    return res.status(201).json({ msg: "success", id: result._id });
}

module.exports = {
    handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserById,
    handleCreateNewUser
}