/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SiteStackOverflowComponent } from './site-stackOverflow.component';

describe('SiteStackOverflowComponent', () => {
  let component: SiteStackOverflowComponent;
  let fixture: ComponentFixture<SiteStackOverflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteStackOverflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteStackOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
