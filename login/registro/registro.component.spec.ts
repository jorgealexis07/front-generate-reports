// @ts-ignore
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroComponent } from './registro.component';

// @ts-ignore
describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // @ts-ignore
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
