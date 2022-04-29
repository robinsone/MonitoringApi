// const { models } = require('../sequelize');
'use strict';

const os = require('os');

async function heartbeat(req, res) {
	const heartbeat = {
    currentDate: Date.now()
  };
	res.status(200).json(heartbeat);
};

async function check(req, res) {
  let systemInfo = {
    freeMemory: os.freemem(),
    hostName: os.hostname(),
    operatingSystem: os.version(),
    operatingSystemVersion: os.release(),
    totalMemory: os.totalmem(),
    uptime: os.uptime(),
  }

  res.status(200).json(systemInfo);
};

module.exports = {
  heartbeat,
  check,
};