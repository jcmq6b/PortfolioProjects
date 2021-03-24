import { Component, OnInit } from '@angular/core';
import { PersonDataService } from 'src/app/services/person-data.service'
import { PersonData} from 'src/app/interfaces/person-data'
import { Bets } from 'src/app/interfaces/bets'
import { AlertController } from '@ionic/angular'
import { Router, ActivatedRoute} from '@angular/router';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-add-new-bet',
  templateUrl: './add-new-bet.page.html',
  styleUrls: ['./add-new-bet.page.scss'],
})
export class AddNewBetPage implements OnInit {

  selectedPerson: string;
  personArray: PersonData[] = [];
  betArray: Bets[] = []
  dataName: string = "people";
  betForm: FormGroup;

  constructor(private personModel: PersonDataService,
    private router: Router,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private formBuilder: FormBuilder,
    private navController: NavController)
    { 

      this.betForm = this.formBuilder.group({
        title: ["", Validators.required],
        amount: ["", Validators.required],
        description: ["", Validators.required],
      });

      //updating person array with local storage data if there is any
      this.personModel.getData(this.dataName).then((people)=>{
        if(people){
          this.personArray= people;

          //I have to put this here, only way to check url on refresh with data
          this.selectedPerson = this.route.snapshot.paramMap.get("person");
          if(!this.personModel.checkPerson(this.selectedPerson)){
            this.router.navigateByUrl("page-not-found");
          }
          for(let person of this.personArray){
            if(this.selectedPerson == person.name){
              this.betArray = person.bets;
            }
          }
        }
      });
    }

  ngOnInit() {
  }

  addBet(){
    //Creating new bet object
    let newBet: Bets = {
      title: this.betForm.value.title,
      amount: Number(this.betForm.value.amount),
      description: this.betForm.value.description,
      active: true,
      conclusion: ""
    }
    //Adding bet object to the persons model
    this.personModel.addNewBet(newBet, this.selectedPerson);

    //navigating back to current bets page
    //Need to navigate to root to avoid returning to cached page
    this.navController.navigateRoot(["/current-bets-page", this.selectedPerson]);
  }

  isNumber(){
    //dont want it to pop up before user input
    if(this.betForm.value.amount == ""){
      return false;
    }else{
      let maybeNumber = Number(this.betForm.value.amount);
      //NaN means its not a valid number
      return(isNaN(maybeNumber));
    }
  }

  //returns true if the bet title is already in use
  isTitleTaken(){
    //dont want it to pop up before user input
    if(this.betForm.value.title != ''){
      for(let bet of this.betArray){
        if(bet.title == this.betForm.value.title){
          return true
        }
      }
      return false;
    }else{
      return false;
    }
  }

  backPage(){
    this.navController.navigateRoot(["/current-bets-page", this.selectedPerson]);
  }

}
