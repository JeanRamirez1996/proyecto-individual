const { Order } = require('../models/order.model');


module.exports.findAllOrder = (req, res) =>{
    Order.find()
    .then(order => res.json(order))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}

module.exports.getOrder = (req, res) => {
    Order.findOne({_id:req.params.id})
        .then(order => res.json(order))
        .catch(err => res.status(400).json(err))
}

module.exports.createOrder = (req, res) => {
    const { nameList, finalPrice, favorite } = req.body;
    Order.create({
        nameList,
        finalPrice,
        favorite
    })
        .then(order => res.json(order))
        .catch(err => res.status(400).json(err))
};

module.exports.updateOrder = (req, res) => {
    Order.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedOrder => res.json(updatedOrder))
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingOrder = (req, res) => {
    Order.deleteOne({ _id: req.params.id })
      .then(order => res.json({ order }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };