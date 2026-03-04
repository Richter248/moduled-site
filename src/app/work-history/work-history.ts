import { Component } from '@angular/core';

@Component({
  selector: 'app-work-history',
  standalone: false,
  templateUrl: './work-history.html',
  styleUrl: './work-history.css',
})
export class WorkHistory {
  readonly employer = 'Evelyn Nora Richter';
  readonly title = 'Full‑Stack Developer';
  readonly desc = `
    Full Stack Software Development for Logistics Program
  `;
  readonly skills = [
    'Angular', 'TypeScript', 'RxJS', 'SCSS/CSS', 'Node.js',
    'REST APIs', 'Git', 'Responsive Design'
  ];
}
