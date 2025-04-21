import {Injectable} from '@angular/core';
import {MealPreference} from '../modal/MealPreference';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealPreferenceService {

  private static readonly REST_API_URI = `${environment.restApi + environment.configContextPath}meal-pref`;

  constructor(private http: HttpClient) {
  }

  save(mealPref: MealPreference): Observable<MealPreference> {
    return this.http.post<MealPreference>(`${MealPreferenceService.REST_API_URI}`, mealPref);
  }

  get(): Observable<MealPreference> {
    return this.http.get<MealPreference>(`${MealPreferenceService.REST_API_URI}`);
  }
}
