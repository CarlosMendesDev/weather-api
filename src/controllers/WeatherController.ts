import axios from 'axios'
import { Request, Response } from 'express'

class WeatherController {
  async getWeather(req: Request, res: Response): Promise<void> {
    try {
      const { latitude, longitude } = req.body

      const { data } = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&units=m&query=${latitude},${longitude}`)

      res.send(data)
    } catch (error) {
      res.status(500).send(error)
    }
  }
}

export default new WeatherController()
