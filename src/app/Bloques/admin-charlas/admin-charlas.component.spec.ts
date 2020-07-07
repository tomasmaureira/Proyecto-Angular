import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCharlasComponent } from './admin-charlas.component';

describe('AdminCharlasComponent', () => {
  let component: AdminCharlasComponent;
  let fixture: ComponentFixture<AdminCharlasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCharlasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCharlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
