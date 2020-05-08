import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CollabeditorPage } from './collabeditor.page';

describe('CollabeditorPage', () => {
  let component: CollabeditorPage;
  let fixture: ComponentFixture<CollabeditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollabeditorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CollabeditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
