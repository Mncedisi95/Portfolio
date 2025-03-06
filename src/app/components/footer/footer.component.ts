import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  /** @property {any} data */

  data: any

  /**
  * @constructor
  * @param {ProjectsService} projectService 
  */
  constructor(private projectService: ProjectsService) { }

  /**
  * @method ngOnInit
  */
  ngOnInit(): void {
    // call the helper function from the service to get all projects
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
