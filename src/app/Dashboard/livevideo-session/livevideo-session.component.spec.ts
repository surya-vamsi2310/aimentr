import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivevideoSessionComponent } from './livevideo-session.component';

describe('LivevideoSessionComponent', () => {
  let component: LivevideoSessionComponent;
  let fixture: ComponentFixture<LivevideoSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivevideoSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivevideoSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
