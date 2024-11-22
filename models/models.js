const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  surname: {type: DataTypes.STRING, allowNull: false},
  email: {type: DataTypes.STRING, unique: true, allowNull: false},
  password: {type: DataTypes.STRING, allowNull: false}
})

const Movie = sequelize.define('movie', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
  tittle: {type: DataTypes.STRING, allowNull: false},
  description: {type: DataTypes.TEXT, allowNull: true},
  creationDate: {type: DataTypes.DATEONLY, allowNull: false},
  genre: {type: DataTypes.STRING, allowNull: false},
  logoUrl: {type: DataTypes.STRING, allowNull: true},
  budget: {type: DataTypes.INTEGER, allowNull: false},
})

const Director = sequelize.define('director', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  surname: {type: DataTypes.STRING, allowNull: false},
  birthday: {type: DataTypes.DATEONLY, allowNull: false},
  dateOfDeath: {type: DataTypes.DATEONLY, allowNull: true},
  imgUrl: {type: DataTypes.STRING, allowNull: true},
  placeOfBirth: {type: DataTypes.STRING, allowNull: false},
  genre: {type: DataTypes.STRING, allowNull: true}
})

const Actor = sequelize.define('actor', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  surname: {type: DataTypes.STRING, allowNull: false},
  height: {type: DataTypes.INTEGER, allowNull: true},
  birthday: {type: DataTypes.DATEONLY, allowNull: false},
  dateOfDeath: {type: DataTypes.DATEONLY, allowNull: true},
  imgUrl: {type: DataTypes.STRING, allowNull: true},
  placeOfBirth: {type: DataTypes.STRING, allowNull: false},
  genre: {type: DataTypes.STRING, allowNull: true}
})

const MovieDirector = sequelize.define('movie_director', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
})

const MovieActor = sequelize.define('movie_actor', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
})

const MovieUser = sequelize.define('movie_user', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
})

const DirectorUser = sequelize.define('director_user', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
})

const ActorUser = sequelize.define('actor_user', {
  id: {type: DataTypes.INTEGER, unique: true, primaryKey: true, autoIncrement: true},
})

Movie.belongsToMany(Director, {through: MovieDirector})
Director.belongsToMany(Movie, {through: MovieDirector})

Movie.belongsToMany(Actor, {through: MovieActor})
Actor.belongsToMany(Movie, {through: MovieActor})

User.belongsToMany(Movie, {through: MovieUser})
Movie.belongsToMany(User, {through: MovieUser})

User.belongsToMany(Director, {through: DirectorUser})
Director.belongsToMany(User, {through: DirectorUser})

User.belongsToMany(Actor, {through: ActorUser})
Actor.belongsToMany(User, {through: ActorUser})

module.exports = {
  User,
  Movie,
  Director,
  Actor,
  MovieDirector,
  MovieActor,
  MovieUser,
  DirectorUser,
  ActorUser
}