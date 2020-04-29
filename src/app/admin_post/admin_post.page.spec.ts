import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Admin_postPage } from './admin_post.page';

describe('Admin_postPage', () => {
  let component: Admin_postPage;
  let fixture: ComponentFixture<Admin_postPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_postPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Admin_postPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
