import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLandingPageComponent } from './client-landing-page.component';

describe('ClientLandingPageComponent', () => {
  let component: ClientLandingPageComponent;
  let fixture: ComponentFixture<ClientLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientLandingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
