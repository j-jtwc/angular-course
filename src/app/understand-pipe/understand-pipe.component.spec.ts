import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandPipeComponent } from './understand-pipe.component';

describe('UnderstandPipeComponent', () => {
  let component: UnderstandPipeComponent;
  let fixture: ComponentFixture<UnderstandPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnderstandPipeComponent]
    });
    fixture = TestBed.createComponent(UnderstandPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
