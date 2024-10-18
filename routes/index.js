const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter')
const movieRouter = require('./movieRouter')
const actorRouter = require('./ActorRouter')
const directorRouter = require('./directorRouter')

router.use('/users', userRouter)
router.use('/movies', movieRouter)
router.use('/actors', actorRouter)
router.use('/directors', directorRouter)

module.exports = router