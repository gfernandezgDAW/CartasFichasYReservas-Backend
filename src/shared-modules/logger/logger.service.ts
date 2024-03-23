import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

export const MORGAN_LOGGER_TYPE =
  ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" - :response-time ms';

export function initializeWinstonLogger() {
  const logger = winston.createLogger({
    level: 'debug',
    handleExceptions: true,
    format: winston.format.combine(
      winston.format.printf(({ level, message }) => {
        return `${level.toUpperCase()}: ${message}`;
      }),
    ),
    transports: [
      new winston.transports.Console(),
      new DailyRotateFile({
        dirname: './src/shared-modules/logger/logs',
        datePattern: 'YYYY-MM-DD',
        maxSize: '10m',
        maxFiles: '5d',
        zippedArchive: true,
      }),
    ],
    exitOnError: false,
  });

  module.exports = logger;
  module.exports.stream = {
    write: function (message) {
      logger.info(message);
    },
  };

  return logger;
}
