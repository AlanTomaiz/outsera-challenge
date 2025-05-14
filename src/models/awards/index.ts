import { type Express } from 'express'

import { AwardsController } from './controller.ts'

export class AwardsModels {
  static async register(app: Express) {
    // const uploadMiddleware = multer().single('file')
    // app.post('/upload', uploadMiddleware, AwardsController.uploadAwardsCSV)
    app.get('/producers/intervals', AwardsController.getProducerIntervals)
  }
}
