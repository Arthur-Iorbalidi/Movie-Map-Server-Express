const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')
const { Movie } = require('../models/models')

class MovieController {
  async create(req, res, next) {
    try {
      const {tittle, description, creationDate, genre, logoUrl, budget} = req.body
      console.log(req.body)

      const movie = await Movie.create({tittle, description, creationDate, genre, logoUrl, budget})

      return res.status(201).json(movie)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {
    return 
  }

  async getById(req, res) {
    
  }
}

module.exports = new MovieController()