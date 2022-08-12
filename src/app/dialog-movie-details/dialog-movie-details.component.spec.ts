import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogMovieDetailsComponent } from './dialog-movie-details.component';

describe('DialogMovieDetailsComponent', () => {
  let component: DialogMovieDetailsComponent;
  let fixture: ComponentFixture<DialogMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogMovieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
