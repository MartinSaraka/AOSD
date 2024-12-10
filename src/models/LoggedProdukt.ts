// src/models/LoggedProdukt.ts
import Produkt from './Produkt';

export default class LoggedProdukt extends Produkt {
  logovaciId: string;

  constructor(nazov: string, cena: number, popis: string) {
    super(nazov, cena, popis); // Pass all three arguments
    this.logovaciId = this.generateLogId();
    console.log(
      `Log: Created product - ${nazov}, price: ${cena}, logId: ${this.logovaciId}`
    );
  }

  private generateLogId(): string {
    return `LOG-${Date.now()}`;
  }
}
