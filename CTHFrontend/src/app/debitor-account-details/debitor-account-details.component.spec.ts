import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebitorAccountDetailsComponent } from './debitor-account-details.component';

describe('DebitorAccountDetailsComponent', () => {
  let component: DebitorAccountDetailsComponent;
  let fixture: ComponentFixture<DebitorAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebitorAccountDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebitorAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
