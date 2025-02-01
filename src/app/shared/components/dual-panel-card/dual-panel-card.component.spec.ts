import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualPanelCardComponent } from './dual-panel-card.component';

describe('DualPanelCardComponent', () => {
  let component: DualPanelCardComponent;
  let fixture: ComponentFixture<DualPanelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DualPanelCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DualPanelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
