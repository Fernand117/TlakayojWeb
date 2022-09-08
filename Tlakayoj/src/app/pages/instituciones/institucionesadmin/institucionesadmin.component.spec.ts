import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitucionesadminComponent } from './institucionesadmin.component';

describe('InstitucionesadminComponent', () => {
  let component: InstitucionesadminComponent;
  let fixture: ComponentFixture<InstitucionesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstitucionesadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitucionesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
