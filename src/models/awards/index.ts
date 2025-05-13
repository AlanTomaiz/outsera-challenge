import { type Express } from 'express'
import multer from 'multer'

import { AwardsController } from './controller.ts'

export class AwardsModels {
  static async register(app: Express) {
    const uploadMiddleware = multer().single('awards')

    app.post('/upload', uploadMiddleware, AwardsController.uploadAwardsCSV)
  }
}
