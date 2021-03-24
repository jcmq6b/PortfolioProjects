import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddNewBetPage } from './add-new-bet.page';

describe('AddNewBetPage', () => {
  let component: AddNewBetPage;
  let fixture: ComponentFixture<AddNewBetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewBetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddNewBetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
