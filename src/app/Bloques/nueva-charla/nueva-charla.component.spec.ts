import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCharlaComponent } from './nueva-charla.component';

describe('NuevaCharlaComponent', () => {
  let component: NuevaCharlaComponent;
  let fixture: ComponentFixture<NuevaCharlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCharlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCharlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
