import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http:HttpClient) { }

  getDataFromApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}
