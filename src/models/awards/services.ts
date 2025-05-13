import { Movie } from '../../utils/types.ts'
import { AwardsRepository } from './repository.ts'

export class AwardsServices {
  static async insertMovies(movies: Partial<Movie>[]) {
    await AwardsRepository.save(movies)
  }
}
