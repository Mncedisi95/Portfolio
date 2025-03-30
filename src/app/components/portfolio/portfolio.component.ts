import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  // declare all properties

  data : any

  constructor(private projectService: ProjectsService,private router: Router) {}

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

  /**
  * @method goToProjectDetails
  * @param {any} projectId 
  */
  goToProjectDetails(projectId: any):void {

    const id = projectId

    sessionStorage.setItem('id', id)

    this.router.navigate(['/project-details'], {state: {id}})

  }
}
