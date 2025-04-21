import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Meal} from '../modal/Meal';

@Injectable({
  providedIn: 'root'
})
export class DietService {

  private static readonly REST_API_URI = `${environment.restApi + environment.configContextPath}diet`;

  constructor(private http: HttpClient) {
  }

  generate(): Observable<Meal[]> {
    let header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer ${localStorage.getItem('token')}`)
    }
    return this.http.get<Meal[]>(`${DietService.REST_API_URI}/generate`, header);
  }
}
