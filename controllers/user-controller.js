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
    }
}


module.exports= userControllers;