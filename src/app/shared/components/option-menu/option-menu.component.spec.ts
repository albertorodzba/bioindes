import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionMenuComponent } from './option-menu.component';

describe('OptionMenuComponent', () => {
  let component: OptionMenuComponent;
  let fixture: ComponentFixture<OptionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
