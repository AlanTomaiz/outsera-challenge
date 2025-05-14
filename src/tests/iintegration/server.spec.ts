import request from 'supertest'

import server from '../../server.ts'
import { AppError } from '../../utils/appError.ts'

describe('ErrorHandler Middleware', () => {
  it('should handle AppError correctly', async () => {
    server.get('/test-app-error', () => {
      throw new AppError('AppError Test', 404)
    })

    const response = await request(server).get('/test-app-error')
    expect(response.status).toBe(404)
  })

  it('should handle generic errors correctly', async () => {
    server.get('/test-generic-error', () => {
      throw new Error('Generic Error Test')
    })

    const response = await request(server).get('/test-generic-error')
    expect(response.status).toBe(500)
  })
})

describe('GET /producers/intervals', () => {
  it('should be return status code 200 with max and min producers', async () => {
    const response = await request(server).get('/producers/intervals')

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('min')
    expect(response.body).toHaveProperty('max')

    const [firstMin] = response.body.min
    expect(firstMin).toHaveProperty('producer')
    expect(firstMin).toHaveProperty('interval')
    expect(firstMin).toHaveProperty('previousWin')
    expect(firstMin).toHaveProperty('followingWin')
  })
})
