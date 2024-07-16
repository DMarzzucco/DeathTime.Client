import { BsDate } from "../db/db";
import fs from 'fs'
import path from 'path'

export const ejSchemas = async () => {
    const schemaPath = path.join(__dirname, 'sql', '../../sql/datos.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    try {
        await BsDate.query(schema);
        console.log('Esquema ejecutado')
    } catch (error) {
        console.log(`Error en el servidor ${error}`)
        throw new Error
    }
}