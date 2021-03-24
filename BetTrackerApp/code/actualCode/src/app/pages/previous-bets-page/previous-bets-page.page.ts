import { Component, OnInit } from '@angular/core';
import { PersonDataService } from 'src/app/services/person-data.service'
import { PersonData} from 'src/app/interfaces/person-data'
import { Bets } from 'src/app/interfaces/bets'
import{ AlertController } from '@ionic/angular'
import { Router, ActivatedRoute} from '@angular/router';
import { IonItemSliding } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-previous-bets-page',
  templateUrl: './previous-bets-page.page.html',
  styleUrls: ['./previous-bets-page.page.scss'],
})
export class PreviousBetsPagePage implements OnInit {

  selectedPerson: string;
  personArray: PersonData[] = [];
  dataName: string = "people";
  totalTitle: string = "Total";

  constructor(private personModel: PersonDataService,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private navController: NavController)
    {
      //updating person array with local storage data if there is any
      this.personModel.getData(this.dataName).then((people)=>{
        if(people){
          this.personArray= people;

          //I have to put this here, only way to check url on refresh with data
          this.selectedPerson = this.route.snapshot.paramMap.get("person");
          if(!this.personModel.checkPerson(this.selectedPerson)){
            this.router.navigateByUrl("page-not-found");
          }
        }
      });
      
    }

  ngOnInit() {
  }

  getBetArray(){
    for(let person of this.personArray){
      if(this.selectedPerson == person.name){
        return person.bets;
      }
    }
  }

  backButton(){
    this.navController.navigateRoot(["/current-bets-page", this.selectedPerson]);
  }

  deleteBet(bet: Bets){
    this.personArray = this.personModel.deleteBet(bet, this.selectedPerson);
  }

  //clicking away closes it
  //cant figure out how to make the .close() function work
  async open(itemSlide: IonItemSliding){
    // console.log("open called");
    let percent = await itemSlide.getSlidingRatio();
    if(percent > 0){
      // console.log("closing");
    }else{
      itemSlide.open("end");
      // console.log("opening");
    }
  }

}
