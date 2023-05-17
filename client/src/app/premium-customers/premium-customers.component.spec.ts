import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumCustomersComponent } from './premium-customers.component';

describe('PremiumCustomersComponent', () => {
  let component: PremiumCustomersComponent;
  let fixture: ComponentFixture<PremiumCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
