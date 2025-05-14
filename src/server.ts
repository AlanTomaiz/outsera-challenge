import 'dotenv/config'
import express from 'express'
import 'express-async-errors'

import { ErrorHandler } from './middleware/errorHandler.ts'
import { AwardsModels } from './models/awards/index.ts'

const server = express()
server.use(express.json())

AwardsModels.register(server)
server.use(ErrorHandler.register)

export default server
