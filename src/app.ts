import server from './server.ts'

server.listen(process.env.PORT!, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
)
