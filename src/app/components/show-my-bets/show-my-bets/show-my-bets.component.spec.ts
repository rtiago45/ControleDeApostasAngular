import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMyBetsComponent } from './show-my-bets.component';

describe('ShowMyBetsComponent', () => {
  let component: ShowMyBetsComponent;
  let fixture: ComponentFixture<ShowMyBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowMyBetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMyBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
