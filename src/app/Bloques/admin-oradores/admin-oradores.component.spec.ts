import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOradoresComponent } from './admin-oradores.component';

describe('AdminOradoresComponent', () => {
  let component: AdminOradoresComponent;
  let fixture: ComponentFixture<AdminOradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
