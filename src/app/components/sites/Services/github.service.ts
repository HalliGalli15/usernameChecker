import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GithubDataService } from '../Data/github.dataService';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private readonly http: HttpClient) { }

  public getData(username: string): Observable<any> {
    return this.http.get<any>(`https://api.github.com/users/${username}`);
  }
}
