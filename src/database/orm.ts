import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR_URL = fileURLToPath(import.meta.url)
const filepath = path.resolve(DIR_URL, '..', 'db.json')

export class JsonORM<T extends { id: string }> {
  private data: T[] = []

  private async loadDatabase(): Promise<T[]> {
    try {
      const data = await fs.promises.readFile(filepath, 'utf-8')
      return JSON.parse(data)
    } catch {
      return []
    }
  }

  private async ensureInitialized(): Promise<void> {
    const stat = await fs.promises.stat(filepath).catch(() => null)
    if (!stat || !stat.isFile()) {
      await fs.promises.writeFile(filepath, JSON.stringify([]))
    }

    this.data = await this.loadDatabase()
  }

  private async saveDatabase(): Promise<void> {
    await fs.promises.writeFile(filepath, JSON.stringify(this.data, null, 2))
  }

  async insert(records: Partial<T>[]): Promise<void> {
    await this.ensureInitialized()
    const dataWithId = records.map((row) => ({
      id: row.id || crypto.randomUUID(),
      ...row
    })) as T[]

    this.data.push(...dataWithId)
    await this.saveDatabase()
  }
}
