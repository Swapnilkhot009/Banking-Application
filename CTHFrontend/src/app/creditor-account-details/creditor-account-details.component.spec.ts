import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditorAccountDetailsComponent } from './creditor-account-details.component';

describe('CreditorAccountDetailsComponent', () => {
  let component: CreditorAccountDetailsComponent;
  let fixture: ComponentFixture<CreditorAccountDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditorAccountDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditorAccountDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
