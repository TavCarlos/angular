import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoDetalheComponent } from './curso-detalhe.component';

describe('CursoDetalheComponent', () => {
  let component: CursoDetalheComponent;
  let fixture: ComponentFixture<CursoDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CursoDetalheComponent]
    });
    fixture = TestBed.createComponent(CursoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
