import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallerys } from './gallerys';

describe('Gallerys', () => {
  let component: Gallerys;
  let fixture: ComponentFixture<Gallerys>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallerys]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gallerys);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
