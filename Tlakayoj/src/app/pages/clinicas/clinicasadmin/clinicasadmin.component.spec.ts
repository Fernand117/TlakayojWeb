import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicasadminComponent } from './clinicasadmin.component';

describe('ClinicasadminComponent', () => {
  let component: ClinicasadminComponent;
  let fixture: ComponentFixture<ClinicasadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClinicasadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicasadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
