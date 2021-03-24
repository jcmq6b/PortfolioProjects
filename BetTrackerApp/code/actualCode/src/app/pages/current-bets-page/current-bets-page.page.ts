import { Component, OnInit } from '@angular/core';
import { PersonDataService } from 'src/app/services/person-data.service'
import { PersonData} from 'src/app/interfaces/person-data'
import { Bets } from 'src/app/interfaces/bets'
import{ AlertController } from '@ionic/angular'
import { Router, ActivatedRoute} from '@angular/router';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-current-bets-page',
  templateUrl: './current-bets-page.page.html',
  styleUrls: ['./current-bets-page.page.scss'],
})
export class CurrentBetsPagePage implements OnInit {

  selectedPerson: string;
  personArray: PersonData[] = [];
  dataName: string = "people";
  totalTitle: string = "Total";

  constructor(private personModel: PersonDataService,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController)
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
          this.changeTitle();
        }
      });
      
    }

  ngOnInit() {

  }

  //This is just precautionary measure, hopfully the navigating back to this page root updates
  ionViewDidEnter(){
    //updating person array with local storage data if there is any
    this.personModel.getData(this.dataName).then((people)=>{
      if(people){
        this.personArray= people;

        //I have to put this here, only way to check url on refresh with data
        this.selectedPerson = this.route.snapshot.paramMap.get("person");
        if(!this.personModel.checkPerson(this.selectedPerson)){
          this.router.navigateByUrl("page-not-found");
        }
        this.changeTitle();
      }
    });
  }

  getBetArray(){
    for(let person of this.personArray){
      if(this.selectedPerson == person.name){
        return person.bets;
      }
    }
  }

  deleteBet(bet: Bets){
    this.personArray = this.personModel.deleteBet(bet, this.selectedPerson);
  }

  //Error when refreshing, the model hasn't loaded before this executes
  checkURL(name: string){
    for(let person of this.personArray){
      if(name == person.name){
        return true;
      }
    }
    this.router.navigateByUrl("page-not-found");
    return false;
  }

  getTotalTitle(name: string){
    for(let person of this.personArray){
      if(name == person.name){
        // console.log("total:" + person.total);
        return Math.abs(person.total);
      }
    }
  }

  //clicking away closes it
  //cant figure out how to make the .close() function work
  async open(itemSlide: IonItemSliding){
    console.log("open called");
    let percent = await itemSlide.getSlidingRatio();
    if(percent > 0){
      //Cant get closing via this function to work
      // console.log("closing");
    }else{
      itemSlide.open("end");
      // console.log("opening");
    }
  }

  //Changes title based on if the total is negative of positive
  //If negative title changes to You Owe: ${person.total}
  //If positive title changes to They Owe: ${person.total}
  changeTitle(){
    let total=0;
    for(let person of this.personArray){
      if(this.selectedPerson == person.name){
        total = person.total
      }
    }
    if(total<0){
      this.totalTitle = "You Owe";
    }else{
      this.totalTitle = "They Owe";
    }
  }

  addBetPage(){
    this.router.navigate(["add-new-bet", this.selectedPerson]);
  }

  async completeBetAlert(bet: Bets){
    const myalert = await this.alertController.create({
      header: "Complete Bet",
      message: "Did you win or lose the bet?",
      buttons:[
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Won",
          role: "win",
          cssClass: "success",
        },
        {
          text: "Lost",
          role: "loss",
          cssClass: "danger"
        }
      ]
    });

    await myalert.present();
    let result = await myalert.onDidDismiss();
    if(result.role == "win"){
      // console.log(result.role);
      this.personArray = this.personModel.concludeBet(bet, this.selectedPerson, result.role);
    }else if(result.role == "loss"){
      // console.log(result.role);
      this.personArray = this.personModel.concludeBet(bet, this.selectedPerson, result.role);
    }
  }

  backButton(){
    this.router.navigateByUrl("");
  }

  previousBets(){
    this.router.navigate(["previous-bets-page", this.selectedPerson]);
  }
}

