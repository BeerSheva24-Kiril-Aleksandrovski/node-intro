import logger from "./logger.mjs";
import path from "path";
import { fileURLToPath } from "url";

const { argv } = process;
const __filename = fileURLToPath(import.meta.url);
logger.log(path.parse(argv[1]));
logger.log(__filename);
logger.log(argv[0]);