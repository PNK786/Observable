import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sample-two',
  standalone: true,
  imports: [],
  templateUrl: './sample-two.component.html',
  styleUrl: './sample-two.component.css',
})
export class SampleTwoComponent {

  constructor(private commonService:CommonService) {
    console.log('SampleTwoComponent Constructor');
  }

   ngOnInit():void {
    console.log('SampleTwoComponent ngOnInit');
    this.ReceivingDataFromSampleOneComponent();
  }
  
  ReceivingDataFromSampleOneComponent() {
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
}
