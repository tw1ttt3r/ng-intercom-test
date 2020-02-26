import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperBotComponent } from './wrapper-bot.component';

describe('WrapperBotComponent', () => {
  let component: WrapperBotComponent;
  let fixture: ComponentFixture<WrapperBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrapperBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
