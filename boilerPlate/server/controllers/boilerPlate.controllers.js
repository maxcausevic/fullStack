const  BoilerPlate  = require('../models/boilerPlate.models')

    module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    module.exports.findAllBoilerPlates = (req, res)=>{
        BoilerPlate.find().sort({title:1})
            .then(allBoilerPlates =>{
                res.json({results: allBoilerPlates})
            })
            .catch(err=>{
                res.json(err)
            })
    }
    
    module.exports.createBoilerPlate = (req, res)=>{
        BoilerPlate.create(req.body)
            .then(newBoilerPlate=>{
                res.json({results: newBoilerPlate})
            })
            .catch(err=>{
                console.log(err)
                res.json(err)
            })
    }
    
    module.exports.findOneBoilerPlate = (req, res)=>{
        BoilerPlate.findOne({_id: req.params.id })
            .then(oneBoilerPlate=>{
                res.json({results: oneBoilerPlate})
            })
            .catch(err=>res.json(err))
    }
    
    module.exports.updateOneBoilerPlate = (req, res)=>{
        BoilerPlate.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            { new: true, runValidators: true }
            )
            .then(updatedBoilerPlate=>{
                res.json({results: updatedBoilerPlate})
            })
            .catch(err=> res.json(err))
    }
    
    module.exports.deleteBoilerPlate = (req,res)=>{
        BoilerPlate.deleteOne({_id: req.params.id})
            .then(deletedBoilerPlate =>{
                res.json({results: deletedBoilerPlate})
            })
            .catch(err=> res.json(err))
    }
