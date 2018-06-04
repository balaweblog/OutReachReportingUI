import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Usersearch } from './usersearch';

@Injectable()
export class NotesService {
constructor(private http: HttpClient) { }

getNotes(): Observable<Array<Usersearch>> {
  return this.http.get<Array<Usersearch>>('http://localhost:3000/notes');
}
addNote(usersearch: Usersearch): Observable<Usersearch> {
  return this.http.post<Usersearch>('http://localhost:3000/notes', usersearch);
}
}
