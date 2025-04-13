import path from 'path'
import fs from 'fs/promises'

// Utility functions for reading and writing to database.json
const databaseFilePath = path.resolve('c:/Users/User 1/URL-Shortener/lib/db.json')

export async function readDatabase() {
  try {
    const data = await fs.readFile(databaseFilePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading db.json:', error)
    return error;
  }
}

export async function writeDatabase(data) {
  try {
    await fs.writeFile(databaseFilePath, data, 'utf8')
    console.log('Database successfully updated.')
  } catch (error) {
    console.error('Error writing to db.json:', error)
  }
}

export default {
  readDatabase,
  writeDatabase
}

