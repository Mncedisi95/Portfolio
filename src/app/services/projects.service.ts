import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  getProjects(): Observable<IProjects[]> {
    // send a get request
    return this.httpClient.get<IProjects[]>(this.dataUrl)
  }
}
