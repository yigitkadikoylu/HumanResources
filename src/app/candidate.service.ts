import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Candidate } from './candidate';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CandidateService {

  private Url = 'https://jsonplaceholder.typicode.com/users';  

  constructor(private http: HttpClient) { }

  getCandidates (): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.Url)

  }
  getCandidate(id: number): Observable<Candidate> {
    const url = `${this.Url}/${id}`;
    return this.http.get<Candidate>(url)
  }

}




