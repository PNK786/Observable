import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-sample-one',
  standalone: true,
  imports: [],
  templateUrl: './sample-one.component.html',
  styleUrl: './sample-one.component.css',
})
export class SampleOneComponent {


  constructor(
    private commonService:CommonService,
    private testServiceService:TestServiceService) {
    console.log('SampleOneComponent Constructor');
   }

  ngOnInit():void {
    console.log('SampleOneComponent ngOnInit');
    this.callableFunction();
  } 

  callableFunction(){
    this.commonService.getData().subscribe({
        next : ((value) => {
        console.log(value);
      }),
      error:((error) => {
        console.error('Error:', error);
      }),
      complete:(() => {
        console.log('Observable completed');
      })
    });
}

getDataFromService(){

  this.testServiceService.getDataFromApi().subscribe({
    next : ((value) => {
      console.log(value);
    }),
    error:((error) => {
      console.error('Error:', error);
    }),
    complete:(() => {
      console.log('Observable completed');
    })
  }); 
}
}
