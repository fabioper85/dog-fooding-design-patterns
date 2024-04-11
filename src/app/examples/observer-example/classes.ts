import { OBSERVER_TYPE } from './enums';
import { Observer } from './interfaces';
// Soggetto da osservare
export class Subject {
  private observers: Observer[] = [];

  // Aggiunge un nuovo osservatore
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  // Rimuove un osservatore
  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Notifica tutti gli osservatori quando il soggetto cambia stato
  notify(data: any): void {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }

  getObserversList() {
    return this.observers;
  }

  getObserversNameList() {
    return this.observers.map((ob) => ob.name);
  }

  getObsByName(obsName: string) {
    return this.observers.find(
      (ob) => ob.name.toLowerCase() === obsName.toLowerCase()
    );
  }
}

// Implementazione di un osservatore concreto
export class SimpleObserver implements Observer {
  constructor(
    public name: string,
    public type: OBSERVER_TYPE = OBSERVER_TYPE.SIMPLE
  ) {}

  // Metodo chiamato quando viene notificato dal soggetto
  update(data: any): void {
    console.log(`${this.name} ha ricevuto l'aggiornamento: ${data}`);
  }
}

export class FancyObserver implements Observer {
  constructor(
    public name: string,
    public type: OBSERVER_TYPE = OBSERVER_TYPE.FANCY
  ) {}

  // Metodo chiamato quando viene notificato dal soggetto
  update(data: any): void {
    console.log(`⭐️⭐️[${this.name}] says: '${data}'⭐️⭐️`);
  }

  getName() {
    return this.name;
  }
}
