// src/utils/sampleProducts.ts
import { loggable } from './loggable';
import Produkt from 'src/models/Produkt';

export function generateSampleProducts(): Produkt[] {
  return [
    loggable('Laptop', 150, 'A high-performance laptop for work and play.'),
    loggable(
      'Microphone',
      50,
      'Capture studio-quality sound with this microphone.'
    ),
    loggable('Monitor', 200, 'A 27-inch monitor with 4K resolution.'),
  ];
}
