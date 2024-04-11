import { Component } from '@angular/core';
import { ExampleLinkComponent } from '../example-link/example-link.component';

@Component({
  selector: 'creational-pg-desc',
  standalone: true,
  imports: [ExampleLinkComponent],
  templateUrl: './creational-pg-desc.component.html',
  styleUrl: './creational-pg-desc.component.css',
})
export class CreationalPgDescComponent {}
