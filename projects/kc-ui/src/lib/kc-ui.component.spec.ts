import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KcUiComponent } from './kc-ui.component';

describe('KcUiComponent', () => {
  let component: KcUiComponent;
  let fixture: ComponentFixture<KcUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KcUiComponent]
    });
    fixture = TestBed.createComponent(KcUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
