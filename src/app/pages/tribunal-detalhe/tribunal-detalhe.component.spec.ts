import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribunalDetalheComponent } from './tribunal-detalhe.component';

describe('TribunalDetalheComponent', () => {
  let component: TribunalDetalheComponent;
  let fixture: ComponentFixture<TribunalDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TribunalDetalheComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TribunalDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
