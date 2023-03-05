const express = require('express');
const petsRouter = express.Router();
const Pet = require('../model/Pet')
const petsController = require('../controllers/pets-controller')

petsRouter.get('/', petsController.getAllPets);
petsRouter.post('/add', petsController.addPet);
petsRouter.get('/:id', petsController.getById);
petsRouter.put('/:id', petsController.updatePet);
petsRouter.delete('/:id', petsController.deletePet)

module.exports = petsRouter;