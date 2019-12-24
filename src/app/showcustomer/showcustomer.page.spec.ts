import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowcustomerPage } from './showcustomer.page';

describe('ShowcustomerPage', () => {
  let component: ShowcustomerPage;
  let fixture: ComponentFixture<ShowcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcustomerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
