const express = require('express');

const db = require('../data/db.js');

const router=express.Router();


// GET an array of all post objects ----------

router.get('/', (req, res) => {
    db
    .find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        res.status(500).json({message: 'posts could not be retrieved'})
    })
})

// GET a post object with the specified id ----------

router.get('/:id', (req, res) => {
    const id=req.params.id
    db
    .findById(id)
    .then(post => {
        if(post){
            res.status(200).json(post)
        } else {
            res.status(404).json({message: 'the post with the specified id could not be found'})
        }
    })
    .catch(err => {
        res.status(500).json({message: 'this post could not be retrieved'})
    })
})


// POST will create a post object ----------


// DELETE will remove a post object with the specified id ----------


// PUT updates a post object with the specified id ----------




module.exports=router