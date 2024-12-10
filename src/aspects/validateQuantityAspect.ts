/* eslint-disable @typescript-eslint/no-explicit-any */
// src/aspects/validateQuantityAspect.ts
import CartManager from 'src/models/CartManager';

export function withQuantityValidation<T extends CartManager>(
  originalMethod: (this: T, ...args: any[]) => any
) {
  return function (this: T, ...args: any[]) {
    const [, quantity] = args;
    if (quantity <= 0) {
      console.warn('Invalid quantity. Must be greater than zero.');
      return;
    }
    return originalMethod.apply(this, args);
  };
}
