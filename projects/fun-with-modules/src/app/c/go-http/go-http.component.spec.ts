import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoHttpComponent } from './go-http.component';

describe('GoHttpComponent', () => {
  let component: GoHttpComponent;
  let fixture: ComponentFixture<GoHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoHttpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
