const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

// GET
// Liste tous les objets
router.get('/', stuffCtrl.getAllStuff);

// GET
// Récupère et retourne un objet
router.get('/:id', stuffCtrl.getOneStuff);

// POST
// Ajoute l'objet en base de donnée
router.post('/', stuffCtrl.createStuff);

// PUT
// Récupère et modifie un objet
router.put('/:id', stuffCtrl.updateStuff);

// DELETE
// Supprime un objet de la base de donnée
router.delete('/:id', stuffCtrl.deleteStuff);

module.exports = router;