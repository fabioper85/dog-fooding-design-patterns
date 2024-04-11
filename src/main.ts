/// <reference types="@angular/localize" />

import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { ExampleSelectorComponent } from './app/shared/example-selector/example-selector.component';
import { CommonModule } from '@angular/common';
import { EXAMPLE_TYPE, PATTERN_TYPE } from './app/types';
import { SingletonExampleComponent } from './app/examples/singleton-example/singleton-example.component';
import { FactoryExampleComponent } from './app/examples/factory-example/factory-example.component';
import { ObserverExampleComponent } from './app/examples/observer-example/observer-example.component';
import { DecoratorExampleComponent } from './app/examples/decorator-example/decorator-example.component';

@Component({
  imports: [
    ExampleSelectorComponent,
    SingletonExampleComponent,
    FactoryExampleComponent,
    ObserverExampleComponent,
    DecoratorExampleComponent,
    CommonModule,
  ],
  selector: 'app-root',
  standalone: true,
  template: `<div class="container">
    <div class="col col-md-12 col-lg-8 m-auto">
      <h1 class="m-4 text-center">DogFooding - Pattern GoF</h1>
      <example-selector (onChangePatternTypeEvent)="setPatternType($event)" (onChangeExampleEvent)="setExampleToShow($event)"></example-selector>

      <ng-container [ngSwitch]="exampleToShow">
        <div class="row mt-4 justify-content-center">
          <singleton-example *ngSwitchCase="'SINGLETON'"></singleton-example>
          <factory-example *ngSwitchCase="'FACTORY'"></factory-example>
          <observer-example *ngSwitchCase="'OBSERVER'"></observer-example>
          <decorator-example *ngSwitchCase="'DECORATOR'"></decorator-example>
        </div>
      </ng-container>
    </div></div>`,
})
export class App {
  exampleToShow?: EXAMPLE_TYPE;
  seletcedPatternType?: PATTERN_TYPE | string;

  setExampleToShow(exampleType: EXAMPLE_TYPE) {
    this.exampleToShow = exampleType;
  }

  setPatternType(patternType: PATTERN_TYPE | string) {
    this.seletcedPatternType = patternType;
    if (patternType === '0000') {
      this.exampleToShow = undefined;
    }
  }
}

bootstrapApplication(App);
