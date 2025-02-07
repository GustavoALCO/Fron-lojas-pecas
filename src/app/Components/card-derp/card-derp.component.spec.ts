import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDerpComponent } from './card-derp.component';

describe('CardDerpComponent', () => {
  let component: CardDerpComponent;
  let fixture: ComponentFixture<CardDerpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDerpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDerpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
