import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixinChartComponent } from './mixin-chart.component';

describe('MixinChartComponent', () => {
  let component: MixinChartComponent;
  let fixture: ComponentFixture<MixinChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MixinChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MixinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
