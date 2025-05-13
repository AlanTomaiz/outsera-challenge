import 'dotenv/config'
import express from 'express'
import 'express-async-errors'

const server = express()
server.use(express.json())

server.listen(process.env.PORT!, () => console.log(`Server is running on port ${process.env.PORT}`))
