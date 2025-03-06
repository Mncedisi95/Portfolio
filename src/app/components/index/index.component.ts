import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  /** @property {any} data */

  data: any

  /**
  * @constructor
  * @param projectService 
  */
  constructor(private projectService: ProjectsService,private router: Router) { }

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

    this.initScrollAnimations()
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

  initScrollAnimations() {
    let lastScrollY = window.scrollY;
    const sections = document.querySelectorAll(".animated-section");

    if (!sections.length) {
      console.warn("No elements found with class .animated-section");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {

            if (window.scrollY > lastScrollY) {
              // Scrolling down
              target.classList.add("moveUp");
              target.classList.remove("moveDown");
            } else {
              // Scrolling up
              target.classList.add("moveDown");
              target.classList.remove("moveUp");
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", () => {
      lastScrollY = window.scrollY;
    });
  }

}
