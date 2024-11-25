import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IProjects } from '../../Model/IProjects';
import { ProjectsService } from '../../services/projects.service';

/**
 * Component Responsible for displaying all projects
 */

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [NgFor],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  //property declaration
  projects: IProjects[] = []

  /**
   * @param projectService 
   */
  constructor(private projectService: ProjectsService){}

  /**
   * @description initializes the component after angular fist display the data-bound properties
   * 
   * Fetches projects data from the Json File
   */
  ngOnInit():void {
    // call the helper function from project service to fetch projects data
    this.projectService.getProjects().subscribe(data => {
        // initialize the projects property with data from projects service
      this.projects = data
    })
  }
}
