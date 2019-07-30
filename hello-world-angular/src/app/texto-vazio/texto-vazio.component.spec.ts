import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoVazioComponent } from './texto-vazio.component';

describe('TextoVazioComponent', () => {
  let component: TextoVazioComponent;
  let fixture: ComponentFixture<TextoVazioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoVazioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoVazioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
