import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildCourseComponent } from './build-course.component';

describe('BuildCourseComponent', () => {
  let component: BuildCourseComponent;
  let fixture: ComponentFixture<BuildCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
