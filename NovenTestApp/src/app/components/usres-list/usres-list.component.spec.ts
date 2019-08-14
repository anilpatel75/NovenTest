import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsresListComponent } from './usres-list.component';

describe('UsresListComponent', () => {
  let component: UsresListComponent;
  let fixture: ComponentFixture<UsresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
