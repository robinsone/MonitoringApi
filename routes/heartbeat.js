"use strict";

const os = require("os");
const osu = require("os-utils");
const checkDiskSpace = require("check-disk-space").default;

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
    memUsage: bytesToSize((await getFreeSpace(path)).free),
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

let path = os.platform() === "win32" ? "c:" : "/";

function bytesToSize(bytes) {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "n/a";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]})`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
}

async function getFreeSpace(path) {
  var diskUsage = checkDiskSpace(path);
  return await diskUsage;
}

module.exports = {
  heartbeat,
  check,
};
