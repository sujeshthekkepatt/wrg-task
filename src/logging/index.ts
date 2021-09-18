import pinoExpress from 'pino-http';
import pino from 'pino';


const logger = pino();

const expressLogger = pinoExpress({logger});

export {logger, expressLogger};
