import { JsonORM } from '../../database/orm.ts'
import { Movie } from '../../utils/types.ts'

export class AwardsRepository {
  private static ORM = new JsonORM<Movie>()

  static save(movies: Partial<Movie>[]) {
    this.ORM.insert(movies)
  }
}
