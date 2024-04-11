import { OBSERVER_TYPE } from './enums';

export interface Observer {
  name: string;
  type: OBSERVER_TYPE;
  update(data: any): void;
}
