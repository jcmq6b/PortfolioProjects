import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CurrentBetsPagePage } from './current-bets-page.page';

describe('CurrentBetsPagePage', () => {
  let component: CurrentBetsPagePage;
  let fixture: ComponentFixture<CurrentBetsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBetsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CurrentBetsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
