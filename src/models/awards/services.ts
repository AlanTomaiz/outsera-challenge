import { AppError } from '../../utils/appError.ts'
import ERRORS from '../../utils/errors.ts'
import { ProducerInterval } from '../../utils/types.ts'
import { AwardsRepository } from './repository.ts'

export class AwardsServices {
  static async getIntervals() {
    const movies = await AwardsRepository.getMovies()
    if (!movies || movies.length === 0) {
      throw new AppError(ERRORS.MOVIES_NOT_FOUND)
    }

    // producers awards
    const producerWins: Record<string, number[]> = {}
    for (const { producers, year } of movies) {
      for (const producer of producers) {
        if (!producerWins[producer]) producerWins[producer] = []
        producerWins[producer].push(year)
      }
    }

    // awards interval
    const intervals: ProducerInterval[] = []
    for (const producer in producerWins) {
      const years = producerWins[producer].sort((a, b) => a - b)
      if (years.length < 2) continue

      for (let i = 1; i < years.length; i++) {
        intervals.push({
          producer,
          interval: years[i] - years[i - 1],
          previousWin: years[i - 1],
          followingWin: years[i]
        })
      }
    }

    if (intervals.length === 0) return { min: [], max: [] }

    const sorted = [...intervals].sort((a, b) => a.interval - b.interval)
    const min = sorted.filter((row) => row.interval === sorted[0].interval)
    const max = sorted.filter(
      (row) => row.interval === sorted[sorted.length - 1].interval
    )

    return { min, max }
  }
}
