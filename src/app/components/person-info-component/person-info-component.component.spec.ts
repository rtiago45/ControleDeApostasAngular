import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoComponentComponent } from './person-info-component.component';

describe('PersonInfoComponentComponent', () => {
  let component: PersonInfoComponentComponent;
  let fixture: ComponentFixture<PersonInfoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonInfoComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
