import { Component, Input, OnInit } from '@angular/core';
import { EXAMPLE_TYPE } from '../../types';
import { JSDesignpatternsLink } from '../../consts';

@Component({
  selector: 'example-link',
  standalone: true,
  imports: [],
  templateUrl: './example-link.component.html',
  styleUrl: './example-link.component.css',
})
export class ExampleLinkComponent implements OnInit {
  @Input() exampleType?: EXAMPLE_TYPE;
  @Input() textLink?: string = 'Pattern link';
  exampleLinkMapping: { [key in EXAMPLE_TYPE]: string } = {
    FACTORY: 'factory-method',
    SINGLETON: 'singleton',
    ABSTRACT_FACTORY: 'abstract-factory',
    BUILDER: 'builder',
    PROTOTYPE: 'prototype',
    ADAPTER: 'adapter',
    BRIDGE: 'bridge',
    COMPOSITE: 'composite',
    FACADE: 'facade',
    DECORATOR: 'decorator',
    OBSERVER: 'observer',
    STATE: 'state',
    STRATEGY: 'strategy',
    CHAIN_OF_RESPONSIBILITY: 'chain-of-responsibility',
    COMMAND: 'command',
  };
  baseUrl: string = JSDesignpatternsLink;

  ngOnInit() {
    if (this.exampleType)
      this.baseUrl =
        this.baseUrl + (this.exampleLinkMapping[this.exampleType] || '');
  }
}
