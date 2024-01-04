import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterFunDemoComponent } from './router-fun-demo.component';

describe('RouterFunDemoComponent', () => {
  let component: RouterFunDemoComponent;
  let fixture: ComponentFixture<RouterFunDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterFunDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterFunDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
