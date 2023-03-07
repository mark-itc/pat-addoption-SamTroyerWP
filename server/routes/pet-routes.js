const express = require('express');
const petsRouter = express.Router();
const Pet = require('../model/Pet')
const petsController = require('../controllers/pets-controller')

petsRouter.get('/', petsController.getAllPets);
<<<<<<< HEAD
petsRouter.post('/add', petsController.addPet);
=======
petsRouter.post('/', petsController.addPet);
>>>>>>> f9cf9a53df939f404496ae64faa758c59f778cf1
petsRouter.get('/:id', petsController.getById);
petsRouter.put('/:id', petsController.updatePet);
petsRouter.delete('/:id', petsController.deletePet)

module.exports = petsRouter;