const winston = require('winston');
const transports = {
  console: new winston.transports.Console({ level: 'warn' }),
  file: new winston.transports.File({ filename: 'combined.log', level: 'error' }),
};

const logger = winston.createLogger({
  transports: [transports.console, transports.file],
});

module.exports = {
  success: (req, res, status, message, data) => {
    logger.info('success');
    res.status(status).json({
      status: status,
      success: true,
      message: message,
      data: data,
    });
  },
  failed: (req, res, status, message, data) => {
    logger.info('failed');
    res.status(status).json({
      status: status,
      success: false,
      message: message,
      data: data,
    });
  },
};
