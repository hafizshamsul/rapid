import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtabComponent } from './atab.component';

describe('AtabComponent', () => {
  let component: AtabComponent;
  let fixture: ComponentFixture<AtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtabComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
