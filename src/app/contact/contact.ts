import { Component } from '@angular/core';
/* -------------------------------------------------
   Contact component – made using Lumo with personal
   additions to fit my needs.
   ------------------------------------------------- */
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly email = 'richter248@duck.com';

  // Generates a safe mailto link (keeps the address out of the HTML source a bit)
  get mailtoLink(): string {
    return `mailto:${this.email}`;
  }
}
