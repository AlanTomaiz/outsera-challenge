import csvParser from 'csv-parser'
import { Readable } from 'node:stream'

import { Movie } from './types.ts'
type Movies = Partial<Movie>[]

export class ParserBuffer {
  static async ParserCSV(buffer: Buffer): Promise<Movies> {
    return new Promise((resolve, reject) => {
      const results: Movies = []

      Readable.from(buffer)
        .pipe(csvParser({ separator: ';' }))
        .on('data', (data) =>
          results.push({
            year: parseInt(data.year, 10),
            title: data.title.trim(),
            studios: data.studios.trim(),
            producers: data.producers.trim(),
            winner: data.winner?.toLowerCase() === 'yes'
          })
        )
        .on('end', () => resolve(results))
        .on('error', reject)
    })
  }
}
