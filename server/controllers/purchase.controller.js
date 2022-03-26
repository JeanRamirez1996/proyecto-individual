const { Purchase } = require('../models/purchase.model');


module.exports.findAllPurchase = (req, res) =>{
    Purchase.find()
    .then(purchase => res.json(purchase))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}

module.exports.getPurchase = (req, res) => {
    Purchase.findOne({_id:req.params.id})
        .then(purchase => res.json(purchase))
        .catch(err => res.status(400).json(err))
}

module.exports.createPurchase = (req, res) => {
    const { nameList, priceList, favorite } = req.body;
    Purchase.create({
        order:{
            nameList,
            priceList
        },
        favorite
    })
        .then(purchase => res.json(purchase))
        .catch(err => res.status(400).json(err))
};

module.exports.updatePurchase = (req, res) => {
    Purchase.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPurchase => res.json(updatedPurchase))
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingPurchase = (req, res) => {
    Purchase.deleteOne({ _id: req.params.id })
      .then(purchase => res.json({ purchase }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };