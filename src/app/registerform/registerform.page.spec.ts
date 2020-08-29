import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterformPage } from './registerform.page';

describe('RegisterformPage', () => {
  let component: RegisterformPage;
  let fixture: ComponentFixture<RegisterformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
