import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoHttpComponent } from './do-http.component';

describe('DoHttpComponent', () => {
  let component: DoHttpComponent;
  let fixture: ComponentFixture<DoHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
