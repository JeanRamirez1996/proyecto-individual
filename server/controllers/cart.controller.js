const { Cart } = require('../models/cart.model');

module.exports.findAllCart = (req, res) =>{
    Cart.find()
    .then(food => res.json(food))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}

module.exports.getCart = (req, res) => {
    Cart.findOne({_id:req.params.id})
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err))
}

module.exports.createCart = (req, res) => {
    const { name, type, price, purchased } = req.body;
    Cart.create({
        name,
        type,
        price,
        purchased
    })
        .then(food => res.json(food))
        .catch(err => res.status(400).json(err))
};

module.exports.updateCart = (req, res) => {
    Cart.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedFood => res.json(updatedFood))
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingCartItem = (req, res) => {
    Cart.deleteOne({ _id: req.params.id })
      .then(food => res.json({ food }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };

module.exports.deleteCart = (req, res) => {
    Cart.deleteMany({ purchased: true })
      .then(food => res.json({ food }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };