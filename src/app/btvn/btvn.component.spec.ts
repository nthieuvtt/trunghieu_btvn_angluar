import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtvnComponent } from './btvn.component';

describe('BtvnComponent', () => {
  let component: BtvnComponent;
  let fixture: ComponentFixture<BtvnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtvnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtvnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
