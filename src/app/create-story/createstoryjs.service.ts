import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatestoryjsService {

  constructor(private http: HttpClient) { 
    let createRoom = this.http.get("");
  }
}
