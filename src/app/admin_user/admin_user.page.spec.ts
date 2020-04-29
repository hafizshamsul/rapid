import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Admin_userPage } from './admin_user.page';

describe('Admin_userPage', () => {
  let component: Admin_userPage;
  let fixture: ComponentFixture<Admin_userPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_userPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Admin_userPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
