import { ParserBuffer } from '../../utils/csvLoader.ts'

export class AwardsRepository {
  static async getMovies() {
    return ParserBuffer.getData()
  }
}
