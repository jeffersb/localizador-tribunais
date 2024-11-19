import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TribunaisComponent } from './tribunais.component';

 
describe('TribunaisComponent', () => {
  let component: TribunaisComponent;
  let fixture: ComponentFixture<TribunaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TribunaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TribunaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
