import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomcreatePage } from './roomcreate.page';

describe('RoomcreatePage', () => {
  let component: RoomcreatePage;
  let fixture: ComponentFixture<RoomcreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomcreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomcreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
