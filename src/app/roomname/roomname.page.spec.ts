import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomnamePage } from './roomname.page';

describe('RoomnamePage', () => {
  let component: RoomnamePage;
  let fixture: ComponentFixture<RoomnamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomnamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
