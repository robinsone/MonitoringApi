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
    // cpus: os.cpus(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    hostName: os.hostname(),
    uptime: os.uptime(),
    operatingSystem: os.version(),
    operatingSystemVersion: os.release(),
  }

  res.status(200).json(systemInfo);
};

module.exports = {
  heartbeat,
  check,
};