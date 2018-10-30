const winston = require('winston');

module.exports = function(err, req, res, next) {
  winston.error({message: `${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`, meta: err});
  

  res.status(500).send('Something failed');
}