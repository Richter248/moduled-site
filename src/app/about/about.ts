import { Component } from '@angular/core';
/* -------------------------------------------------
   About Me component – made using Lumo with personal
   additions to fit my needs.
   ------------------------------------------------- */
@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  readonly name = 'Evelyn Nora Richter';
  readonly title = 'Full‑Stack Developer';
  readonly bio = `
    A SIUE Graduate, full stack developer, tinkerer, fencer, and many other interesting
    things from St. Louis, Missouri.
  `;
  readonly skills = [
    'Angular', 'TypeScript', 'RxJS', 'SCSS/CSS', 'Node.js',
    'REST APIs', 'Git', 'Responsive Design'
  ];

  readonly hobbies = [
    'Fencing','Robotics','Software','Science Fiction and Fantasy'
  ];
}
