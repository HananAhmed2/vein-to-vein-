import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveBlankComponent } from './nave-blank.component';

describe('NaveBlankComponent', () => {
  let component: NaveBlankComponent;
  let fixture: ComponentFixture<NaveBlankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NaveBlankComponent]
    });
    fixture = TestBed.createComponent(NaveBlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
