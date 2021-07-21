import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbevComponent } from './snackbev.component';

describe('SnackbevComponent', () => {
  let component: SnackbevComponent;
  let fixture: ComponentFixture<SnackbevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackbevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
