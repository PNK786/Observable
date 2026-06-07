import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTwoComponent } from './sample-two.component';

describe('SampleTwoComponent', () => {
  let component: SampleTwoComponent;
  let fixture: ComponentFixture<SampleTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
