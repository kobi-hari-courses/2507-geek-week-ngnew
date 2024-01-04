import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefferedComponent } from './deffered.component';

describe('DefferedComponent', () => {
  let component: DefferedComponent;
  let fixture: ComponentFixture<DefferedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefferedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
