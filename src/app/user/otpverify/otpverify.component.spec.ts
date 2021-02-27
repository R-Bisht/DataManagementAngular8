import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OTPVerifyComponent } from './otpverify.component';


describe('OTPVerifyComponent', () => {
  let component: OTPVerifyComponent;
  let fixture: ComponentFixture<OTPVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTPVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OTPVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
