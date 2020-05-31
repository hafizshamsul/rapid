import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RoomnamesubPage } from './roomnamesub.page';

describe('RoomnamesubPage', () => {
  let component: RoomnamesubPage;
  let fixture: ComponentFixture<RoomnamesubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomnamesubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RoomnamesubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
