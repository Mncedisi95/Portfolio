import { Component } from '@angular/core';
import { IProjects } from '../../Model/IProjects';
import { ProjectsService } from '../../services/projects.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  // declare all properties
  projects : IProjects[] = []

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    // call the helper function from the service to get all projects
    this.projectService.getProjects().subscribe(data => {
      this.projects = data
    })
  }
}
