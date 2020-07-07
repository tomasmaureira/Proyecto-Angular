import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParticipantesComponent } from './admin-participantes.component';

describe('AdminParticipantesComponent', () => {
  let component: AdminParticipantesComponent;
  let fixture: ComponentFixture<AdminParticipantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminParticipantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
