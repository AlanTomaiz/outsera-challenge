import csvParser from 'csv-parser'
import fs from 'node:fs'
import path from 'node:path'

import { Movie } from './types.ts'

const dbFilepath = path.resolve(process.cwd(), 'movielist.csv')

export class ParserBuffer {
  static async getData(): Promise<Movie[]> {
    return new Promise((resolve, reject) => {
      const results: Movie[] = []

      fs.createReadStream(dbFilepath)
        .pipe(csvParser({ separator: ';' }))
        .on('data', (data) => {
          const producers = String(data.producers)
            .split(/,| and /)
            .map((row) => row.trim())
            .filter(Boolean)

          results.push({
            year: parseInt(data.year, 10),
            title: data.title.trim(),
            studios: data.studios.trim(),
            producers,
            winner: data.winner?.toLowerCase() === 'yes'
          })
        })
        .on('end', () => resolve(results))
        .on('error', reject)
    })
  }
}
