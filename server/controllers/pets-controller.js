const Pet = require('../model/Pet')

const getAllPets = async (req, res, next) => {
    let pets;

    try {
        pets = await Pet.find();
    } catch (e) {
        console.log(e)
    }

        if (!pets) {
            return res.status(404).json({message: "No pets found"})   
        }
        return res.status(200).json({pets:pets})
}

const getById = async (req, res, next) => {
    const id = req.params.id 
    let pet;
    try {
        pet = await Pet.findById(id);
    } catch (e) {
        console.log(e);
    }

    if (!pet) {
        return res.status(404).json({message: "No pet found"})   
    }
    return res.status(200).json({ pet })
}


const addPet = async(req, res, next) => {
    const {name, type, description, breed, available, image, createdAt} = req.body
    let pet;
    try {
        pet = new Pet({
            name,
            type,
            description,
            breed,
            available,
            image,
            createdAt
        });
        await pet.save()
    } catch (e) {
        console.log(e)
    }

    if(!pet) {
        return res.status(404).json({message: 'Unable to add pet'})
    }
    return res.status(200).json({ pet })
}

const updatePet = async(req, res, next) => {
    const id = req.params.id;
    const {name, type, description, breed, available, image, updatedAt} = req.body;
    let pet;
    try {
        pet = await Pet.findByIdAndUpdate(id, {
            name,
            type,
            description,
            breed,
            available,
            image,
            updatedAt
        });
        pet = await pet.save()
    } catch (e) {
        console.log(e)
    }

    if(!pet) {
        return res.status(404).json({message: 'Unable to update by this Id'})
    }
    return res.status(200).json({ pet })
}

const deletePet = async(req, res, next) => {
    const id = req.params.id;
    let pet;
    try {
        pet = await Pet.findByIdAndRemove(id)
    } catch (e) {
        console.log(e)
    }

    if(!pet) {
        return res.status(404).json({message: 'Unable to delete Pet by this ID'})
    }
    return res.status(200).json({ message: 'Pet successfully deleted' })

}

exports.getAllPets = getAllPets;
exports.addPet = addPet;
exports.getById = getById;
exports.updatePet = updatePet;
exports.deletePet = deletePet;