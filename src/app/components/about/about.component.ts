import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  /**@property { any } data */

  data: any

  /**
  * @constructor
  * @param { ProjectsService } dataService 
  */
  constructor(private dataService: ProjectsService) { }

  ngOnInit() {
    // call the helper function from project service to fetch projects data
    this.dataService.getData().subscribe({
      next: (data) => {

        this.data = data // Assign fetched data to the component's variable
      },
      error: (error) => {
        console.error('Error fetching data:', error) // Log error to console
      }
    })
  }

}
