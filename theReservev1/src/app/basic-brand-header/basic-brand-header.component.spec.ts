import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBrandHeaderComponent } from './basic-brand-header.component';

describe('BasicBrandHeaderComponent', () => {
  let component: BasicBrandHeaderComponent;
  let fixture: ComponentFixture<BasicBrandHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicBrandHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicBrandHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
