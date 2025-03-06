import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.css'
})
export class ProjectDetailsComponent {

  /**@property {any} id */

  id : any

  /** @property {any} id */

  projectDetails : any

  /**
  * @constructor
  * @param {Router} router 
  */
  constructor(private router: Router,private projectService: ProjectsService ){}

  /**
  * @method ngOnInit 
  */
  async ngOnInit(): Promise<void> {

    try {
      // Get the current navigation object from the router
      const navigation = this.router.getCurrentNavigation()
      // Extract the state object from navigation extras, expecting an 'id' property
      const state = navigation?.extras?.state as { id?: any }

      // Check if 'id' is available in the navigation state
      if (state?.id) {
        // Assign the retrieved ID to the component property
        this.id = state.id
        // Store the ID in sessionStorage to persist across refreshes
        sessionStorage.setItem('id', this.id)
      } else {
        // Retrieve the ID from sessionStorage if the page was refreshed
        this.id = sessionStorage.getItem('id')
      }

      // If 'id' is still not available, redirect to the home page
      if (!this.id) {
        // Redirect user to the home page to prevent access without a valid ID
        this.router.navigate(['/'])
      }
    
      this.fetchProjectDetails()

    } catch (error) {

      console.error('Error during initialization:', error);
    }
  }

  /**
  * @method fetchProjectDetails
  */
  fetchProjectDetails(){

    this.projectService.getProjectByID(this.id).subscribe(data => {

      this.projectDetails = data      
    })
  }
}
