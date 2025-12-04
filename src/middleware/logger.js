import pino from "pino-http";
 
let logger;

if (process.env.NODE_ENV === "production") {
  // На продакшені — чистий JSON
  logger = pino({ level: "info" });
} else {
  // У девелопменті — красиві кольорові логи
  logger = pino({
    level: "info",
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
        translateTime: "HH:MM:ss",
      },
    },
  });
}

export { logger };