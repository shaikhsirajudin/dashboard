import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetComponent } from './offset.component';

describe('OffsetComponent', () => {
  let component: OffsetComponent;
  let fixture: ComponentFixture<OffsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OffsetComponent]
    });
    fixture = TestBed.createComponent(OffsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
