var winston = require('winston');
var guid = require('guid');

winston.add(winston.transports.File, { filename: guid.raw() + '.log' });

winston.info(100);
