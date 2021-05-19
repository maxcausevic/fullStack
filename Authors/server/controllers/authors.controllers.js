const  Author  = require('../models/authors.models')

    module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
    module.exports.findAllAuthors = (req, res)=>{
        Author.find().sort({name:1})
            .then(allauthors =>{
                res.json({results: allauthors})
            })
            .catch(err=>{
                res.json(err)
            })
    }
    
    module.exports.createAuthor = (req, res)=>{
        Author.create(req.body)
            .then(newAuthor=>{
                res.json({results: newAuthor})
            })
            .catch(err=>{
                console.log(err)
                res.json(err)
            })
    }
    
    module.exports.findOneAuthor = (req, res)=>{
        Author.findOne({_id: req.params.id })
            .then(oneAuthor=>{
                res.json({results: oneAuthor})
            })
            .catch(err=>res.json(err))
    }
    
    module.exports.updateOneAuthor = (req, res)=>{
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            { new: true, runValidators: true }
            )
            .then(updatedAuthor =>{
                res.json({results: updatedAuthor})
            })
            .catch(err=> res.json(err))
    }
    
    module.exports.deleteAuthor = (req,res)=>{
        Author.deleteOne({_id: req.params.id})
            .then(deletedAuthor =>{
                res.json({results: deletedAuthor})
            })
            .catch(err=> res.json(err))
    }
