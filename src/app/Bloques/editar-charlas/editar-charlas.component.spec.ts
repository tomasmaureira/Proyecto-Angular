import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCharlasComponent } from './editar-charlas.component';

describe('EditarCharlasComponent', () => {
  let component: EditarCharlasComponent;
  let fixture: ComponentFixture<EditarCharlasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarCharlasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCharlasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
