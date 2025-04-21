import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Profile} from '../modal/MealPreference';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private static readonly REST_API_URI = environment.restApi + environment.configContextPath + "profile";

  constructor(private http: HttpClient) { }

  save(profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(ProfileService.REST_API_URI, profile);
  }

  get(id: number) {
    return this.http.get<Profile>(`${ProfileService.REST_API_URI}/${id}`);
  }
}
