import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MegsmenuComponent } from './megsmenu.component';

describe('MegsmenuComponent', () => {
  let component: MegsmenuComponent;
  let fixture: ComponentFixture<MegsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MegsmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MegsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
