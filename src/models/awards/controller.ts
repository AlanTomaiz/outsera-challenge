import { Request, Response } from 'express'

import { AwardsServices } from './services.ts'

export class AwardsController {
  // static async uploadAwardsCSV(req: Request, res: Response) {
  //   if (!req.file) {
  //     throw new AppError('Arquivo CSV não enviado.')
  //   }

  //   const movies = await ParserBuffer.ParserCSV(req.file.buffer)
  //   AwardsServices.insertMovies(movies)

  //   res.status(201).send()
  // }

  static async getProducerIntervals(req: Request, res: Response) {
    const movies = await AwardsServices.getIntervals()
    res.json(movies)
  }
}
