import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

/**
 * Service Responsible for Fecting all projects from the json file
 */

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  /** @property {string } dataUrl */ 

  private dataUrl : string = 'assets/data/dataset.json'

  /**
  * @constructor
  * @param { HttpClient } httpClient 
  */
  constructor(private httpClient: HttpClient) { }

  /**
   * @method getData
   * @description helper function that fetch all projects from the json file
   * @returns 
   */
  getData(): Observable<any> {
    // send a get request
    return this.httpClient.get<any>(this.dataUrl)
  }

  /**
   * @method getProjectByID
   * @param {number} projectId 
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
    )
  }
}
