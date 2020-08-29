import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginformPage } from './loginform.page';

describe('LoginformPage', () => {
  let component: LoginformPage;
  let fixture: ComponentFixture<LoginformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
