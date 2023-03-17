const express = require('express');
const petsController = require('../controllers/pets-controller')
const verifyToken = require('../utils/verifyToken')

const petsRouter = express.Router();


petsRouter.post('/add', verifyToken.verifyAdmin, petsController.addPet);

petsRouter.put('/:id', verifyToken.verifyAdmin, petsController.updatePet);

petsRouter.delete('/:id', verifyToken.verifyAdmin, petsController.deletePet)

petsRouter.get('/find/:id', verifyToken.verifyAdmin, petsController.getById);

petsRouter.get('/', petsController.getAllPets);
petsRouter.get('/getByType', petsController.getByType);


module.exports = petsRouter;