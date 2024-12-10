// src/utils/loggable.ts
import LoggedProdukt from 'src/models/LoggedProdukt';
import Produkt from 'src/models/Produkt';

export function loggable(nazov: string, cena: number, popis: string): Produkt {
  return cena > 100
    ? new LoggedProdukt(nazov, cena, popis)
    : new Produkt(nazov, cena, popis);
}
