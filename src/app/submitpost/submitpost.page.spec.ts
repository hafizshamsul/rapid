import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubmitpostPage } from './submitpost.page';

describe('SubmitpostPage', () => {
  let component: SubmitpostPage;
  let fixture: ComponentFixture<SubmitpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitpostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubmitpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
