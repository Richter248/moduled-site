import { Component } from '@angular/core';
import { ProjectInfo } from '../shared/projectInfo';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  public projectCards: ProjectInfo[] = [];

  ngOnInit() {
    this.projectCards = [
      {
          id: 0,
          name: "ESP32 Roomba",
          description: "ESP32 Engaging in Serial Communications with Roomba",
          pictureUrl: ""
      },
      {
          id: 2,
          name: "Python Tank Enclosure",
          description: "Uses a FeatherRP2040 and some extra components to monitor conditions in my pythons enclosure",
          pictureUrl: ""
      }
    ]
  }
}
