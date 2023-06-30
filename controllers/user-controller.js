const {User, Thought} =require('../models');

const userControllers ={
    getUsers(req, res){
        User.find()
        .select("-__v")
        .then((user)=>res.json(user))
        .catch((err)=>{
            res.status(500).json(err)
            console.log(err);
        })
    },
    createUser(req,res){
        User.create(req.body)
        .then((user)=>res.json(user))
        .catch((err)=>{
            res.status(500).json(err)
            console.log(err);
        })
    },
    getSingleUser(req, res){
        User.findOne({_id: req.params.userId})
        .select("-__v")
        .then((user)=>{
            !user ?res.status(404).json({message: "No user with this id!"})
            : res.json(user)
        }).catch((err)=>  {res.status(500).json(err)
        console.log(err);})
    },
    updateUser(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            {$set: req.body},
            {new: true}
        ) .then((user)=>{
            !user ?res.status(404).json({message: "No user with this id!"})
            : res.json(user)
        }).catch((err)=>  {res.status(500).json(err)
        console.log(err);})
    },
    deleteUser(req,res){
        User.findOneAndDelete({_id: req.params.userId})
        .then((user)=>{
            !user ?res.status(404).json({message: "No user with this id!"})
            : res.json(user)
        }).catch((err)=>  {res.status(500).json(err)
        console.log(err);})
    }
}


module.exports= userControllers;