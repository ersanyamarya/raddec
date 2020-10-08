const log4js = require("log4js");
const logger = log4js.getLogger();
const filepath = process.env.LOGGER_FILE || "raddec.log";
const appenders = {
  external: {
    type: "file",
    filename: filepath,
    layout: { type: "messagePassThrough" },
  },
  out: { type: "stdout", layout: { type: "colored" } },
};

const categories = {
  default: { appenders: ["external"], level: process.env.LOG_LEVEL },
};

if (process.env.NODE_ENV === "development") {
  categories.default.appenders.push("out");
}

log4js.configure({
  appenders,
  categories,
});

module.exports = logger;
