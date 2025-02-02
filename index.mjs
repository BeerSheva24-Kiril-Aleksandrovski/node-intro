import logger from "./logger.mjs";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
logger.log("debug", __filename);