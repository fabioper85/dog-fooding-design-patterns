import { Component } from '@angular/core';
import { ExampleLinkComponent } from '../example-link/example-link.component';

@Component({
  selector: 'behavioural-pg-desc',
  standalone: true,
  imports: [ExampleLinkComponent],
  templateUrl: './behavioural-pg-desc.component.html',
  styleUrl: './behavioural-pg-desc.component.css',
})
export class BehaviouralPgDescComponent {}
