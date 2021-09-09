import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheepInfoComponent } from './sheep-info.component';

describe('SheepInfoComponent', () => {
  let component: SheepInfoComponent;
  let fixture: ComponentFixture<SheepInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheepInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SheepInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
