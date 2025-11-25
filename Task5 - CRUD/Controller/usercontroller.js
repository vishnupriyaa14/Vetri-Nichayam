const User = require("../model/userModel");

const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.send({ msg: "This is from GET-users", allUsers });
  } catch (error) {
    console.log(error);
    res.send({ msg: "Internal server error", error });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.send({ msg: "This is from create  users", newUser });
  } catch (error) {
    console.log(error);
    res.send({ msg: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUser = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.send("This is from update user", updatedUser);
  } catch (error) {
    console.log(error);
    res.send({ msg: "Internal Server Error" }, updateUser);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedUser = await User.findOneAndDelete({ _id: id });
    res.send("This is from delete user", deletedUser);
  } catch (error) {
    console.log(error);
    res.send({ msg: "Internal Server Error" }, updateUser);
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
