import { Component } from '@angular/core';
import { FancyObserver, SimpleObserver, Subject } from './classes';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OBSERVER_TYPE } from './enums';
import { Observer } from './interfaces';
import { BehaviouralPgDescComponent } from '../../shared/behavioural-pg-desc/behavioural-pg-desc.component';
import { EXAMPLE_TYPE } from '../../types';
import { ExampleLinkComponent } from '../../shared/example-link/example-link.component';

interface ObserverTypeOption {
  value: OBSERVER_TYPE;
  label: string;
  selected: boolean;
}

@Component({
  selector: 'observer-example',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BehaviouralPgDescComponent,
    ExampleLinkComponent,
  ],
  templateUrl: './observer-example.component.html',
  styleUrl: './observer-example.component.css',
})
export class ObserverExampleComponent {
  exampleType: EXAMPLE_TYPE = EXAMPLE_TYPE.OBSERVER;
  subject?: Subject;
  messageToSend: string = '';
  newObserverName: string = '';
  observerTypes = OBSERVER_TYPE;
  observerTypeOps: ObserverTypeOption[] = [
    { value: OBSERVER_TYPE.SIMPLE, label: 'Semplice', selected: true },
    { value: OBSERVER_TYPE.FANCY, label: 'Fancy', selected: false },
  ];
  newObserverTypeSelected: OBSERVER_TYPE = this.observerTypeOps.filter(
    (ot) => ot.selected
  )[0].value;
  observersList: Observer[] = [];

  createSubject() {
    this.subject = new Subject();
  }

  addObserver() {
    let observer;

    switch (this.newObserverTypeSelected) {
      case OBSERVER_TYPE.SIMPLE:
      default:
        observer = new SimpleObserver(this.newObserverName);
        break;
      case OBSERVER_TYPE.FANCY:
        observer = new FancyObserver(this.newObserverName);
    }

    this.subject!.addObserver(observer);
    this.setObsList();
    this.clearFormData();
  }

  broadcastMessage() {
    this.subject!.notify(this.messageToSend);
  }

  removeObserver(obsName: string) {
    let obsToRemove = this.subject!.getObsByName(obsName);
    obsToRemove && this.subject!.removeObserver(obsToRemove);
    this.setObsList();
  }

  private clearFormData() {
    this.newObserverName = '';
  }

  private setObsList() {
    this.observersList = this.subject!.getObserversList();
  }
}
