export enum PATTERN_TYPE {
  STRUCTURAL = 'STRUCTURAL',
  CREATIONAL = 'CREATIONAL',
  BEHAVIOURAL = 'BEHAVIOURAL',
}

export enum EXAMPLE_TYPE {
  SINGLETON = 'SINGLETON',
  FACTORY = 'FACTORY',
  ABSTRACT_FACTORY = 'ABSTRACT_FACTORY',
  BUILDER = 'BUILDER',
  PROTOTYPE = 'PROTOTYPE',
  DECORATOR = 'DECORATOR',
  ADAPTER = 'ADAPTER',
  BRIDGE = 'BRIDGE',
  COMPOSITE = 'COMPOSITE',
  FACADE = 'FACADE',
  STRATEGY = 'STRATEGY',
  OBSERVER = 'OBSERVER',
  STATE = 'STATE',
  COMMAND = 'COMMAND',
  CHAIN_OF_RESPONSIBILITY = 'CHAIN_OF_RESPONSIBILITY',
}

export interface PatternTypeOption {
  value: EXAMPLE_TYPE | string;
  label: string;
  selected: boolean;
  disabled: boolean;
}

export interface ExampleOption {
  patternType: PATTERN_TYPE | string;
  value: EXAMPLE_TYPE | string;
  label: string;
  selected: boolean;
  disabled: boolean;
}

export type PatternTypeOptions = PatternTypeOption[];
export type ExampleOptions = ExampleOption[];
