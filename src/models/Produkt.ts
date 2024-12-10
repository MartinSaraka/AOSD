// src/models/Produkt.ts
export default class Produkt {
  nazov: string;
  cena: number;
  popis: string;

  constructor(nazov: string, cena: number, popis: string) {
    this.nazov = nazov;
    this.cena = cena;
    this.popis = popis;
  }

  getNazov(): string {
    return this.nazov;
  }

  getCena(): number {
    return this.cena;
  }

  getPopis(): string {
    return this.popis;
  }
}
