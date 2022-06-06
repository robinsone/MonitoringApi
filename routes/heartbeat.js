"use strict";

const os = require("os");
const osu = require("os-utils");

async function heartbeat(req, res) {
  const heartbeat = {
    currentDate: Date.now(),
  };
  res.status(200).json(heartbeat);
}

async function check(req, res) {
  let systemInfo = {
    freeMemory: os.freemem(),
    hostName: os.hostname(),
    operatingSystem: os.version(),
    operatingSystemVersion: os.release(),
    totalMemory: os.totalmem(),
    uptime: serverUpdime(os.uptime()),
    memUsage: Math.round(100 * (os.freemem() / os.totalmem())) + "%",
    cpuUsage:
      Math.round(
        100 * (await new Promise((resolve) => osu.cpuUsage(resolve)))
      ) + "%",
    ramUsage: Math.round(100 - 100 * osu.freememPercentage()) + "%",
  };

  res.status(200).json(systemInfo);
}

function serverUpdime(uptime) {
  var seconds = uptime;
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);

  var dDisplay = d > 0 ? d + "d " : "";
  var hDisplay = h > 0 ? h + "h " : "";
  var mDisplay = m > 0 ? m + "m" : "";
  return dDisplay + hDisplay + mDisplay;
}

module.exports = {
  heartbeat,
  check,
};
