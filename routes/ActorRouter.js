const Router = require('express');
const router = new Router();
const actorController = require('../controllers/actorController')

router.post('/', actorController.create)
router.get('/', actorController.getAll)
router.get('/:id', actorController.getById)

module.exports = router