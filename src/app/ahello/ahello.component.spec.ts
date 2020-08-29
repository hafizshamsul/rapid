import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AhelloComponent } from './ahello.component';

describe('AhelloComponent', () => {
  let component: AhelloComponent;
  let fixture: ComponentFixture<AhelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhelloComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AhelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
