import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  EXAMPLE_TYPE,
  PATTERN_TYPE,
  PatternTypeOptions,
  ExampleOption,
  ExampleOptions,
} from '../../../app/types';

@Component({
  selector: 'example-selector',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './example-selector.component.html',
  styleUrl: './example-selector.component.css',
})
export class ExampleSelectorComponent implements OnInit {
  @Output() onChangeExampleEvent: EventEmitter<EXAMPLE_TYPE> =
    new EventEmitter();

  @Output() onChangePatternTypeEvent: EventEmitter<PATTERN_TYPE> =
    new EventEmitter();

  patternTypeOps: PatternTypeOptions = [
    {
      value: PATTERN_TYPE.CREATIONAL,
      label: 'Creational',
      selected: false,
      disabled: false,
    },
    {
      value: PATTERN_TYPE.STRUCTURAL,
      label: 'Structural',
      selected: false,
      disabled: false,
    },
    {
      value: PATTERN_TYPE.BEHAVIOURAL,
      label: 'Behavioural',
      selected: false,
      disabled: false,
    },
  ];

  patternTypeSelected: PATTERN_TYPE | string = '';

  exampleFilteredByPatternOps: ExampleOptions = [];

  exampleSelectorOps: ExampleOptions = [
    {
      patternType: PATTERN_TYPE.CREATIONAL,
      value: EXAMPLE_TYPE.SINGLETON,
      label: 'Singleton',
      selected: false,
      disabled: false,
    },
    {
      patternType: PATTERN_TYPE.CREATIONAL,
      value: EXAMPLE_TYPE.FACTORY,
      label: 'Factory',
      selected: false,
      disabled: false,
    },
    {
      patternType: PATTERN_TYPE.CREATIONAL,
      value: EXAMPLE_TYPE.ABSTRACT_FACTORY,
      label: 'Abstract factory',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.CREATIONAL,
      value: EXAMPLE_TYPE.BUILDER,
      label: 'Builder',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.CREATIONAL,
      value: EXAMPLE_TYPE.PROTOTYPE,
      label: 'Prototype',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.STRUCTURAL,
      value: EXAMPLE_TYPE.ADAPTER,
      label: 'Adapter',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.STRUCTURAL,
      value: EXAMPLE_TYPE.BRIDGE,
      label: 'Bridge',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.STRUCTURAL,
      value: EXAMPLE_TYPE.FACADE,
      label: 'Facade',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.STRUCTURAL,
      value: EXAMPLE_TYPE.COMPOSITE,
      label: 'Composite',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.STRUCTURAL,
      value: EXAMPLE_TYPE.DECORATOR,
      label: 'Decorator',
      selected: false,
      disabled: false,
    },
    {
      patternType: PATTERN_TYPE.BEHAVIOURAL,
      value: EXAMPLE_TYPE.OBSERVER,
      label: 'Subscriber / Observer',
      selected: false,
      disabled: false,
    },
    {
      patternType: PATTERN_TYPE.BEHAVIOURAL,
      value: EXAMPLE_TYPE.COMMAND,
      label: 'Command',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.BEHAVIOURAL,
      value: EXAMPLE_TYPE.STATE,
      label: 'State',
      selected: false,
      disabled: true,
    },
    {
      patternType: PATTERN_TYPE.BEHAVIOURAL,
      value: EXAMPLE_TYPE.STRATEGY,
      label: 'Strategy',
      selected: false,
      disabled: false,
    },
    {
      patternType: PATTERN_TYPE.BEHAVIOURAL,
      value: EXAMPLE_TYPE.CHAIN_OF_RESPONSIBILITY,
      label: 'Chain of responsibility',
      selected: false,
      disabled: true,
    },
  ];

  ngOnInit() {
    this.patternTypeOps = this.patternTypeOps
      .map((pto) => {
        let hasPTOSomeExamples = this.exampleSelectorOps.some(
          (eo) => eo.patternType === pto.value && !eo.disabled
        );
        return {
          ...pto,
          disabled: !hasPTOSomeExamples,
        };
      })
      .sort((a, b) => Number(a.disabled) - Number(b.disabled));

    this.patternTypeOps.unshift({
      value: '0000',
      label: 'Scegli un pattern da mostrare',
      selected: true,
      disabled: false,
    });

    this.patternTypeSelected = this.patternTypeOps.find(
      (pt) => pt.selected
    )!.value;
  }

  onPatternTypeChangeHandler(event: any) {
    this.exampleFilteredByPatternOps =
      this.exampleSelectorOps.filter(
        (ex: ExampleOption) => ex.patternType === event.target.value
      ) || [];

    const enabledExamples = this.exampleFilteredByPatternOps.filter(
      (ef) => !ef.disabled
    );

    if (this.exampleFilteredByPatternOps.length >= 1) {
      if (enabledExamples.length > 0) {
        enabledExamples[0].selected = true;
        this.onChangeExampleEvent.emit(
          enabledExamples[0].value as EXAMPLE_TYPE
        );
      } else {
        this.exampleFilteredByPatternOps[0].selected = true;
        this.onChangeExampleEvent.emit(
          this.exampleFilteredByPatternOps[0].value as EXAMPLE_TYPE
        );
      }
    }

    this.patternTypeSelected &&
      this.onChangePatternTypeEvent.emit(
        this.patternTypeSelected as PATTERN_TYPE
      );

    // this.exampleFilteredByPatternOps.push({
    //   patternType: '0000',
    //   value: '0000',
    //   label: 'Scegli un pattern da mostrare',
    //   selected: true,
    // });
  }

  onExampleChangeHandler(event: any) {
    this.onChangeExampleEvent.emit(event.target.value);
  }
}
