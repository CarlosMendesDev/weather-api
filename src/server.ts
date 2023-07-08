import 'dotenv/config'
import server from './app'

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`Start server on port ${PORT}! :D`)
})
