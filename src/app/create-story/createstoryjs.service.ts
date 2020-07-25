import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatestoryjsService {
  baseURL: string = "http://localhost:8080/";

  constructor(private http: HttpClient) { 
    let createRoom = this.http.get("");
  }
  createRoom(username:string): Observable<any> {
    const headers = { 'content-type': 'application/json'} 
    return this.http.post(this.baseURL + 'people', username,{'headers':headers})
  }
  createStory(username:string,storyName:string): Observable<any> {
    const headers = { 'content-type': 'application/json'} 
    var body={'username':username,'storyname':storyName};
    var postBody=JSON.stringify(body);
    return this.http.post(this.baseURL + '', postBody,{'headers':headers})
  }
}
