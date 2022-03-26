const { Food } = require('../models/food.model');

module.exports.findAllFood = (req, res) =>{
    Food.find()
    .then(food => res.json(food))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}

module.exports.getFood = (req, res) => {
    Food.findOne({_id:req.params.id})
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err))
}

module.exports.createFood = (req, res) => {
    const { name, type, price, description } = req.body;
    Food.create({
        name,
        type,
        price,
        description
    })
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err))
};

module.exports.updateFood = (req, res) => {
    Food.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedFood => res.json(updatedFood))
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingFood = (req, res) => {
    Food.deleteOne({ _id: req.params.id })
      .then(food => res.json({ food }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };