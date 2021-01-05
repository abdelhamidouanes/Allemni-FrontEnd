import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistreAppelComponent } from './registre-appel.component';

describe('RegistreAppelComponent', () => {
  let component: RegistreAppelComponent;
  let fixture: ComponentFixture<RegistreAppelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistreAppelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistreAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
