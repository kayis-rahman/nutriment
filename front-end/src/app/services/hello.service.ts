import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private static readonly REST_API_URI = environment.restApi + environment.configContextPath;

  constructor(private http: HttpClient) {
  }

  getHello(): Observable<String> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'text/plain, */*',
        'Content-Type': 'application/json' // We send JSON
      }),
      responseType: 'text' as 'json'  // We accept plain text as response.
    };
    return this.http.get<String>(`${HelloService.REST_API_URI}hello`, httpOptions)
  }
}
