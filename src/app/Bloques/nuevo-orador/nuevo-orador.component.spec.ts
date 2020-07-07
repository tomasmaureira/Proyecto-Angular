import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoOradorComponent } from './nuevo-orador.component';

describe('NuevoOradorComponent', () => {
  let component: NuevoOradorComponent;
  let fixture: ComponentFixture<NuevoOradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoOradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoOradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
