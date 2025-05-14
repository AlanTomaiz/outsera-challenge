import request from 'supertest'

import server from '../../../server.ts'

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
