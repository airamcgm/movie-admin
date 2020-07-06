import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMoviesComponent } from './table-movies.component';

describe('TableMoviesComponent', () => {
  let component: TableMoviesComponent;
  let fixture: ComponentFixture<TableMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
