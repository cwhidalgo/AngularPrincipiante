import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SileBarComponent } from './sile-bar.component';

describe('SileBarComponent', () => {
  let component: SileBarComponent;
  let fixture: ComponentFixture<SileBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SileBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SileBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
