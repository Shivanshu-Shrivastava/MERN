const router = require('express').Router()
let exerciseModel = require('./../models/exercise.model.js')

router.route('/').get((req, res) => {
    exerciseModel.find()
        .then(data => res.json(data))
        .catch(e => res.status(401).json('error' + e))

})

router.route('/:id').get((req, res) => {
    exerciseModel.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(error => res.status(401).json(error))
})
router.route('/:id').delete((req, res) => {
    exerciseModel.findByIdAndDelete(req.params.id)
        .then(exercise => res.json('Exercise deleted'))
        .catch(error => res.status(401).json(error))
})

router.route('/updated/:id').put((req, res) => {
    exerciseModel.findById(req.params.id)
        .then(exercise => {
            console.log(exercise)
            exercise.username = req.body.usernaam
            exercise.description = req.body.desc
            exercise.duration = Number(req.body.dura)
            exercise.date = req.body.dat
            exercise.save()
                .then(() => res.json('execise updated'))
                .catch((e) => res.status(401).json(e))
        })
        .catch(error => res.status(401).json(error))
})
// router.route('/update?idq=:id').put((req,res)=>{
//     console.log(req.query);
//     exerciseModel.findById(req.query.idq)
//     .then(result =>{
//         console.log(res.json(result));

//     })
//     .catch(e=>console.log(res.json(e)))
// })


router.route('/add').post((req, res) => {
    const username = req.body.usernaam
    const description = req.body.desc
    const duration = req.body.dura
    const date = Date.parse(req.body.dat)

    const newexercise = new exerciseModel({
        username,
        description,
        duration,
        date
    })
    newexercise.save()
        .then(() => res.json('execise added'))
        .catch((e) => res.status(401).json(e))

})

module.exports = router