import { Request, Response } from 'express'

import { AwardsServices } from './services.ts'

export class AwardsController {
  static async getProducerIntervals(req: Request, res: Response) {
    const movies = await AwardsServices.getIntervals()
    res.json(movies)
  }
}
