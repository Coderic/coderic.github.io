import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalJobsComponent } from './local-jobs.component';

describe('LocalJobsComponent', () => {
  let component: LocalJobsComponent;
  let fixture: ComponentFixture<LocalJobsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalJobsComponent]
    });
    fixture = TestBed.createComponent(LocalJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
