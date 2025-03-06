import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  /** @property {any} data */

  data: any

  /**
  * @constructor
  * @param projectService 
  */
  constructor(private projectService: ProjectsService) { }

  /**
  * @description initializes the component after angular fist display the data-bound properties
  * Fetches data from the Json File
  */
  ngOnInit(): void {
    // call the helper function from project service to fetch projects data
    this.projectService.getData().subscribe({
      next: (data) => {
        this.data = data // Assign fetched data to the component's variable
      },
      error: (error) => {
        console.error('Error fetching data:', error) // Log error to console
      }
    })
  }

}
