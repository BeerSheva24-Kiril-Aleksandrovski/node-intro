import logger from './logger.mjs';
import fs from 'node:fs'
const data = fs.readFileSync('./index.mjs','utf8');
console.log(data)
fs.writeFileSync('./file.txt', ["kuku", "kukureku", "Hello World!"].join('\n'), 'utf8')