/* eslint-disable @typescript-eslint/no-explicit-any */
// src/aspects/advancedLoggingAspect.ts
import { logConfig } from 'src/config/logConfig';

type LogLevel = 'INFO' | 'DEBUG' | 'ERROR';

function getLogLevelValue(level: LogLevel): number {
  const levels = { ERROR: 0, INFO: 1, DEBUG: 2 };
  return levels[level];
}

export function withConditionalLogging(level: LogLevel) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      if (
        logConfig.enabled &&
        getLogLevelValue(level) <= getLogLevelValue(logConfig.level as LogLevel)
      ) {
        console.log(`[${level}] Executing ${propertyKey} with args:`, args);
      }
      const result = originalMethod.apply(this, args);
      if (
        logConfig.enabled &&
        getLogLevelValue(level) <= getLogLevelValue(logConfig.level as LogLevel)
      ) {
        console.log(`[${level}] Completed ${propertyKey} with result:`, result);
      }
      return result;
    };

    return descriptor;
  };
}
