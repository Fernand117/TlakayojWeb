import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosadminComponent } from './medicosadmin.component';

describe('MedicosadminComponent', () => {
  let component: MedicosadminComponent;
  let fixture: ComponentFixture<MedicosadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicosadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
