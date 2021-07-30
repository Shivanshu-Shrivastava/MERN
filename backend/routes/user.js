const router  = require('express').Router()
let usermodel = require('./../models/user.model.js')

router.route('/').get((req,res)=>{
    usermodel.find()
    .then(data => res.json(data))
    .catch(e => res.status(401).json('Error  ',e))
})

router.route('/add').post((req,res)=>{

    const username = req.body.usernaam
    console.log('ho skta hai --',username)
    console.log(req.body)
    const newuser = new usermodel({username})

    newuser.save()
    .then(()=>res.json('User added'))
    .catch((e)=>{res.status(401).json(e);
    
    })


})
module.exports = router