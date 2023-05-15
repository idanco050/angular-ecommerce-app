import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicsClientsComponent } from './electronics-clients.component';

describe('ElectronicsClientsComponent', () => {
  let component: ElectronicsClientsComponent;
  let fixture: ComponentFixture<ElectronicsClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicsClientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
