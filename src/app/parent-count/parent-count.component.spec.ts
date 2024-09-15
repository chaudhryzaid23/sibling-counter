import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCountComponent } from './parent-count.component';

describe('ParentCountComponent', () => {
  let component: ParentCountComponent;
  let fixture: ComponentFixture<ParentCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
