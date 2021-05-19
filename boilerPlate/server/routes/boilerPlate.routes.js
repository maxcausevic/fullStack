const BoilerPlateController = require('../controllers/boilerPlate.controllers');

module.exports = app =>{
    app.get('/api', BoilerPlateController.index)
    app.get('/api/boilerPlates', BoilerPlateController.findAllBoilerPlates);
    app.post('/api/boilerPlates/create', BoilerPlateController.createBoilerPlate);
    app.get('/api/boilerPlates/:id', BoilerPlateController.findOneBoilerPlate);
    app.put("/api/boilerPlates/update/:id", BoilerPlateController.updateOneBoilerPlate)
    app.delete("/api/boilerPlates/delete/:id", BoilerPlateController.deleteBoilerPlate)
}
