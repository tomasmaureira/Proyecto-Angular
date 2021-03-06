import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OradoresComponent } from './oradores.component';

describe('OradoresComponent', () => {
  let component: OradoresComponent;
  let fixture: ComponentFixture<OradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
