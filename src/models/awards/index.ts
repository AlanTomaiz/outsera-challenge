import { type Express } from 'express'

import { AwardsController } from './controller.ts'

export class AwardsModels {
  static async register(app: Express) {
    app.get('/producers/intervals', AwardsController.getProducerIntervals)
  }
}
