import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Admin_docPage } from './admin_doc.page';

describe('Admin_docPage', () => {
  let component: Admin_docPage;
  let fixture: ComponentFixture<Admin_docPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Admin_docPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Admin_docPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
