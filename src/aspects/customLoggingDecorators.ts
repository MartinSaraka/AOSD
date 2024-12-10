/* eslint-disable @typescript-eslint/no-explicit-any */
// src/aspects/customLoggingDecorators.ts

export function LogBefore() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log(`[Before] Executing ${propertyKey} with args:`, args);
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

export function LogAfter() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);
      console.log(`[After] Completed ${propertyKey} with result:`, result);
      return result;
    };
    return descriptor;
  };
}

export function LogError() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      try {
        return originalMethod.apply(this, args);
      } catch (error) {
        console.error(`[Error] Exception in ${propertyKey}:`, error);
        throw error; // Re-throw the error for further handling if needed
      }
    };
    return descriptor;
  };
}
