const express = require('express');
const router = express.Router();
const Pet = require('../model/Pet')
const petsController = require('../controllers/pets-controller')

router.get('/', petsController.getAllPets);
router.post('/', petsController.addPet);
router.get('/:id', petsController.getById);
router.put('/:id', petsController.updatePet);
router.delete('/:id', petsController.deletePet)

module.exports = router;