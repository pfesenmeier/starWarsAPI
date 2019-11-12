import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipIndexComponent } from './ship-index.component';

describe('ShipIndexComponent', () => {
  let component: ShipIndexComponent;
  let fixture: ComponentFixture<ShipIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
