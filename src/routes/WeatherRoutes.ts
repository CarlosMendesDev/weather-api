import express from 'express'
import WeatherController from '../controllers/WeatherController'

const router = express.Router()

router.get('/get-weather', WeatherController.getWeather)

export default router
