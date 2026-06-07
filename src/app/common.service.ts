import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }


  getData():Observable<string> {
    return new Observable((observer) => {
      observer.next('first value');
      observer.next('second value');  
      setTimeout(() => {
        observer.complete();
      }, 2000);
    });
  }
}
