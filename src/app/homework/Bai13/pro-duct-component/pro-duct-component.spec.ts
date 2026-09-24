import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProDuctComponent } from './pro-duct-component';

describe('ProDuctComponent', () => {
  let component: ProDuctComponent;
  let fixture: ComponentFixture<ProDuctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProDuctComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProDuctComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
