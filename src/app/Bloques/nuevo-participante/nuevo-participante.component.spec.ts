import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoParticipanteComponent } from './nuevo-participante.component';

describe('NuevoParticipanteComponent', () => {
  let component: NuevoParticipanteComponent;
  let fixture: ComponentFixture<NuevoParticipanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoParticipanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoParticipanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
