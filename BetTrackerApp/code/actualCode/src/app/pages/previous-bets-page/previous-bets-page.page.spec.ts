import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreviousBetsPagePage } from './previous-bets-page.page';

describe('PreviousBetsPagePage', () => {
  let component: PreviousBetsPagePage;
  let fixture: ComponentFixture<PreviousBetsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviousBetsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreviousBetsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
