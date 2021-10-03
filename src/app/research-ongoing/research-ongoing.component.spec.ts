import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchOngoingComponent } from './research-ongoing.component';

describe('ResearchOngoingComponent', () => {
  let component: ResearchOngoingComponent;
  let fixture: ComponentFixture<ResearchOngoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchOngoingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
