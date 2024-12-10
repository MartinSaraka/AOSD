// src/models/Objednavka.ts
import Produkt from './Produkt';

export default class Objednavka {
  produkt: Produkt;
  mnozstvo: number;

  constructor(produkt: Produkt, mnozstvo: number) {
    this.produkt = produkt;
    this.mnozstvo = mnozstvo;
  }

  getProdukt(): Produkt {
    return this.produkt;
  }

  getMnozstvo(): number {
    return this.mnozstvo;
  }
}
