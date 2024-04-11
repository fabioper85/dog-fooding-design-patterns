import { Component } from '@angular/core';
import { SingletonObject } from './classes';
import { CreationalPgDescComponent } from '../../shared/creational-pg-desc/creational-pg-desc.component';
import { EXAMPLE_TYPE } from '../../types';
import { ExampleLinkComponent } from '../../shared/example-link/example-link.component';

@Component({
  selector: 'singleton-example',
  standalone: true,
  imports: [CreationalPgDescComponent, ExampleLinkComponent],
  templateUrl: './singleton-example.component.html',
  styleUrl: './singleton-example.component.css',
})
export class SingletonExampleComponent {
  exampleType: EXAMPLE_TYPE = EXAMPLE_TYPE.SINGLETON;
  showExample: boolean = false;
  instances: SingletonObject[] = [];
  instancesChecked: boolean = false;
  isGettingInstance: boolean = false;
  exampleResult: string = '';

  getInstance() {
    if (this.instances.length === 2 && this.instancesChecked) {
      this.instances = [];
      this.instancesChecked = false;
    }
    if (this.instances.length === 0) {
      this.exampleResult = '';
    }

    this.isGettingInstance = true;
    this.exampleResult +=
      'Getting a new instance' +
      (this.instances.length === 1 ? ' (maybe XD)' : '') +
      '....\n';
    this.instances.push(SingletonObject.getInstance());
    setTimeout(() => {
      this.exampleResult += 'DONE!!\n';
      this.isGettingInstance = false;
    }, Math.random() * 1000);
  }

  checkInstances() {
    this.exampleResult =
      this.exampleResult +
      'Same instance? ' +
      (this.instances[0] === this.instances[1]);
    this.instancesChecked = true;
  }
}
