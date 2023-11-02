import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasNgforComponent } from './diretivas-ngfor.component';

describe('DiretivasNgforComponent', () => {
  let component: DiretivasNgforComponent;
  let fixture: ComponentFixture<DiretivasNgforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiretivasNgforComponent]
    });
    fixture = TestBed.createComponent(DiretivasNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
