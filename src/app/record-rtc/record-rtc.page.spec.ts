import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecordRtcPage } from './record-rtc.page';

describe('RecordRtcPage', () => {
  let component: RecordRtcPage;
  let fixture: ComponentFixture<RecordRtcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordRtcPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecordRtcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
