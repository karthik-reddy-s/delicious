import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesdillaComponent } from './quesdilla.component';

describe('QuesdillaComponent', () => {
  let component: QuesdillaComponent;
  let fixture: ComponentFixture<QuesdillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesdillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesdillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
