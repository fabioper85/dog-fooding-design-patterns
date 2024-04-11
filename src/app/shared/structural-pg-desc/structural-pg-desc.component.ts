import { Component } from '@angular/core';
import { ExampleLinkComponent } from '../example-link/example-link.component';

@Component({
  selector: 'structural-pg-desc',
  standalone: true,
  imports: [ExampleLinkComponent],
  templateUrl: './structural-pg-desc.component.html',
  styleUrl: './structural-pg-desc.component.css',
})
export class StructuralPgDescComponent {}
