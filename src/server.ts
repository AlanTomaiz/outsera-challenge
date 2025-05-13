import 'dotenv/config'
import express from 'express'
import 'express-async-errors'

import { ErrorHandler } from './middleware/errorHandler'
import { AwardsModels } from './models/awards'

const server = express()
server.use(express.json())

AwardsModels.register(server)
server.use(ErrorHandler.register)

server.listen(process.env.PORT!, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
)
