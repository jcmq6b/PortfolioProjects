import { Component } from '@angular/core';
import { PersonDataService } from 'src/app/services/person-data.service'
import { PersonData} from 'src/app/interfaces/person-data'
import { Bets } from 'src/app/interfaces/bets'
import{ AlertController } from '@ionic/angular'
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personArray: PersonData[] = [];
  dataName: string = "people";

  constructor(private personModel: PersonDataService,
    private alertController: AlertController,
    private router: Router)
  {
    //updating person array with local storage data if there is any
    // this.personArray = this.personModel.updateData();
    this.personModel.getData(this.dataName).then((people)=>{
      if(people){
        this.personArray= people;
        console.log(people);
      }
    });
  }

  //async allows me to use await
  async presentAddPersonAlert(){
    //creating alert model
    const alert = await this.alertController.create({
      header: 'Add New Person',
      message: 'Please type the name of the person you want to add, <strong>must be unique</strong>',
      inputs:[
        {
          name: "name",
          type: "text",
          placeholder: "Enter Name"
        }
      ],
      buttons: [
        {
          //If user clicks outside the alert to cancel it calls first handler with role cancel
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Create",
          role: "submit",
          handler: () =>{
            console.log("adding name")
          }
        }
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    //creating a new person with the inputted name
    if(result.role == "submit"){
      this.addPerson(result.data.values.name)
    }
    console.log(result);
  }

  addPerson(name: string){
    if(name != "" && this.personModel.isPersonNameUnique(name)){
      this.personArray = this.personModel.addPerson(name);
    }else{
      alert("Did NOT create new person!\nThe name cannot be empty and must be unique.")
    }
  }

  loadCurrentBets(name:string){
    this.router.navigate(["/current-bets-page", name]);
  }

  async presentDeletePersonAlert(name: string){
    const alert = await this.alertController.create({
      header: "Delete Person",
      message: "Are you sure you want to delete this person? This will delete all bets and data. <strong>This cannot be undone</strong>",
      buttons: [
        {
          //If user clicks outside the alert to cancel it calls first handler with role cancel
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Confirm",
          role: "confirm",
          handler: () =>{
            console.log("deleting person")
          }
        }
      ],
    });

    await alert.present();
    let result = await alert.onDidDismiss();
    //creating a new person with the inputted name
    if(result.role == "confirm"){
      this.personArray = this.personModel.deletePerson(name);
    }
  }

  editPersonName(newPerson: PersonData, oldPerson: PersonData){
    if(newPerson != null){
      this.personArray = this.personModel.editPerson(newPerson, oldPerson);
    }else{
      console.log("Error editing person, object passed is null");
    }
  }

  async presentEditPersonAlert(person: PersonData){
    const alerts = await this.alertController.create({
      header: "Edit Person",
      message: "Enter a new name <strong>(must be unique)</strong>",
      inputs:[
        {
          name: "name",
          type: "text",
          placeholder: person.name
        }
      ],
      buttons: [
        {
          //If user clicks outside the alert to cancel it calls first handler with role cancel
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
        },
        {
          text: "Confirm",
          role: "confirm",
          handler: () =>{
            console.log("editing person")
          }
        }
      ],
    });

    await alerts.present();
    let result = await alerts.onDidDismiss();
    //creating a new person with the inputted name
    if(result.role == "confirm"){
      let newName = result.data.values.name;
      if(newName != "" && this.personModel.isPersonNameUnique(newName)){
        // console.log(person.name);
        let newPerson: PersonData = {name: newName, bets: person.bets, total: person.total};
        // console.log(newPerson.name);
        // console.log(person.name);
        this.editPersonName(newPerson, person);
      }else{
        alert("Did NOT edit name. The name must not be empyt and must be unique!");
      }
      
    }
  }
}
