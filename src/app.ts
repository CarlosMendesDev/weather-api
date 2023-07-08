import express from 'express'
import WeatherRoutes from './routes/WeatherRoutes'

class App {
  public server: express.Application

  constructor() {
    this.server = express()
    this.server.use(express.json())
    this.server.use(WeatherRoutes)
  }
}

export default new App().server
