import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IProjects } from '../Model/IProjects';

/**
 * Service Responsible for Fecting all projects from the json file
 */

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  // property declaration
  private dataUrl = 'assets/data/dataset.json'

  /**
   * @param httpClient 
   */
  constructor(private httpClient: HttpClient) { }

  /**
   * @description helper function that fetch all projects from the json file
   * 
   * @returns list of projects
   */
  getData(): Observable<any> {
    // send a get request
    return this.httpClient.get<any>(this.dataUrl)
  }

  /**
   * @method getProjectByID
   * @param projectId 
   * @description
   * @returns 
   */
  getProjectByID(projectId: number): Observable<any> {
  
    return this.httpClient.get<any>(this.dataUrl).pipe(
      map(data => {
        if (!data || !data.projects) {
          console.error('Projects data not found');
          return null;
        }
        
        return data.projects.find((project: any) => project.id === projectId) || null 
 
      }),
      catchError(error => {
        console.error('Error fetching project:', error);
        return of(null);
      })
    );
  }
}
