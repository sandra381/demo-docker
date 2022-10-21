import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductyservComponent } from './productyserv.component';

describe('ProductyservComponent', () => {
  let component: ProductyservComponent;
  let fixture: ComponentFixture<ProductyservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductyservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductyservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
