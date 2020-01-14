import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixtuesByDateComponent } from './fixtues-by-date.component';

describe('FixtuesByDateComponent', () => {
  let component: FixtuesByDateComponent;
  let fixture: ComponentFixture<FixtuesByDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixtuesByDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixtuesByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
