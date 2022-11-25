const Thing = require("../models/Thing");

exports.getAllStuff = (req, res, next) => {

    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error } ))

}

exports.getOneStuff = (req, res, next) => {

    Thing.findById(req.params.id)
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(400).json({ error }))

}

exports.createStuff = (req, res, next) => {

    delete req.body._id;

    const thing = new Thing({
        ...req.body
    });

    thing.save()
        .then(() => res.status(201).json({ message: "Objet enregistré !!" }) )
        .catch(error => res.status(400).json({ error } ));

}

exports.updateStuff = (req, res, next) => {

    Thing.updateOne({_id: req.params.id }, { ...req.body, _id: req.params.id } )
        .then(() => res.status(200).json({ message: "Objet modifié !" }))
        .catch(error => res.status(400).json({ error } ))

}

exports.deleteStuff = (req, res, next) => {

    Thing.deleteOne( {_id: req.params.id })
        .then(() => res.status(200).json({ message: "Objet supprimé !" }))
        .catch(error => res.status(400).json({ error } ))

}