import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearderLoginComponent } from './hearder-login.component';

describe('HearderLoginComponent', () => {
  let component: HearderLoginComponent;
  let fixture: ComponentFixture<HearderLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearderLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HearderLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
