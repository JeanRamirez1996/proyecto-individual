const { Person } = require('../models/person.model');


module.exports.findAllPerson = (req, res) =>{
    Person.find()
    .then(person => res.json(person))
    .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}

module.exports.getPerson = (req, res) => {
    Person.findOne({_id:req.params.id})
        .then(person => res.json(person))
        .catch(err => res.status(400).json(err))
}

module.exports.createPerson = (req, res) => {
    const { firstName, lastName, address } = req.body;
    Person.create({
        firstName,
        lastName,
        address
    })
        .then(person => res.json(person))
        .catch(err => res.status(400).json(err))
};

module.exports.updatePerson = (req, res) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedPerson => res.json(updatedPerson))
        .catch(err => res.status(400).json(err))
}


module.exports.deleteAnExistingPerson = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
      .then(person => res.json({ person }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };