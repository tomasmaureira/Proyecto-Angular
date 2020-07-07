import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOradorComponent } from './editar-orador.component';

describe('EditarOradorComponent', () => {
  let component: EditarOradorComponent;
  let fixture: ComponentFixture<EditarOradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarOradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarOradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
