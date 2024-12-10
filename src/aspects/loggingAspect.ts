/* eslint-disable @typescript-eslint/no-explicit-any */
// src/aspects/loggingAspect.ts
import CartManager from 'src/models/CartManager';

export function withLogging<T extends CartManager>(
  originalMethod: (this: T, ...args: any[]) => any
) {
  return function (this: T, ...args: any[]) {
    const [product] = args;
    console.log(
      `Logging: Adding product - ${product.getNazov()}, Price: ${product.getCena()}, Description: ${product.getPopis()}`
    );
    return originalMethod.apply(this, args);
  };
}
