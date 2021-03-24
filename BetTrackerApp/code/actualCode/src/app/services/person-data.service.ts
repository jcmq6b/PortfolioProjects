import { Injectable } from '@angular/core';
import { PersonData} from 'src/app/interfaces/person-data'
import { Bets } from 'src/app/interfaces/bets'
import { Storage } from '@ionic/storage'
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {

  private personArray: PersonData[] = [];
  dataName: string = "people";

  constructor(private storage: Storage)
  { 
    this.getData(this.dataName).then((people)=>{
      if(people){
        this.personArray= people;
      }
    });
  }

  getData(name: string){
    return this.storage.get(name);
  }

  setData(name: string, data: PersonData[]){
    this.storage.set(name, data);
  }

  //As soon as model is created it goes over to see if there is any data in local storage
  //If not then it defaults to empty array
  //the .then waits tell it reutrns something then executes the next line
  //Will never execute the rest w/o recieving data first
  updateData(){
    this.getData(this.dataName).then((people)=>{
      if(people){
        this.personArray= people;
      }
    });
    return this.personArray
  }


  addPerson(personName: string){
      let personObject: PersonData = {name: personName, bets: [], total: 0};
      //updating person array
      this.personArray.push(personObject);
      // console.log(personObject);

      //once array is updated then update local storage(indexDB)
      this.setData(this.dataName, this.personArray);

      //returing updated person array
      return this.personArray;
  }

  checkPerson(personName:string){
    for(let person of this.personArray){
      if(personName == person.name){
        return true;
      }
    }
    return false;
  }

  //Removes all occurances of the person based on their name,
  //But each person should have a unique name
  deletePerson(personName: string){
    //Finding person in person array
    for(let i=0; i<this.personArray.length; i++){
      if(personName == this.personArray[i].name){
        this.personArray.splice(i, 1);
        // console.log("Deleting person from array: " + personName);
      }
    }

    //updating local storage
    this.setData(this.dataName, this.personArray);

    //returning updated person array
    return this.personArray;
  }

  //goes through the array to see if the name entered is unique
  //returns true if it is unique, false if not
  isPersonNameUnique(personName: string){
    for(let person of this.personArray){
      if(personName == person.name){
        return false;
      }
    }
    return true;
  }

  editPerson(newPerson: PersonData, oldPerson: PersonData){
    // console.log("New Person Name: " + newPerson.name);
    // console.log("Old Person Name: " + oldPerson.name);
    //updating array
    if(newPerson != null && oldPerson != null){
      for(let i=0; i<this.personArray.length; i++){
        if(oldPerson.name == this.personArray[i].name){
          this.personArray.splice(i,1,newPerson);
        }
      }
    }else{
      console.log("Error editing person, object passed is null");
    }

    console.log(this.personArray);
    //updating local storage
    this.setData(this.dataName, this.personArray);

    //returning updated array
    return this.personArray
  }

  //checks if the bet title for that person is unique
  isBetTitleUnique(betTitle: string, personName: string){
    for(let person of this.personArray){
      if(personName == person.name){
        for(let bet of person.bets){
          if(betTitle == bet.title){
            return false;
          }
        }
      }
    }
    return true;
  }
  
  addNewBet(betObject: Bets, personName: string){
    //finding correct person
    for(let person of this.personArray){
      if(personName == person.name){
        //adding new bet
        person.bets.push(betObject);
      }
    }
    //update local storage(indexDB)
    this.setData(this.dataName, this.personArray);
  }

  concludeBet(betObject: Bets, personName: string, status: string){
    //updating bet info
    betObject.conclusion = status;
    betObject.active = false;

    //updating person array
    for(let person of this.personArray){
      if(personName == person.name){
        for(let i=0; i<person.bets.length;i++){
          if(betObject.title == person.bets[i].title){
             person.bets.splice(i,1,betObject);
            //editing running total
            if(betObject.conclusion == "win"){
              person.total = person.total + betObject.amount;
            }else{
              person.total = person.total - betObject.amount;
            }
          }
        }
      }
    }

    //updating local storage
    this.setData(this.dataName, this.personArray);

    // console.log(this.personArray);
    //returning updated array
    return this.personArray;
  }

  deleteBet(betObject: Bets, personName: string){
    // console.log(betObject);
    // console.log(personName)
    for(let person of this.personArray){
      if(personName == person.name){
        for(let i=0; i<person.bets.length;i++){
          if(betObject.title == person.bets[i].title){
            //removing bet from person array
            person.bets.splice(i,1);
            //updating running total
            // console.log(person.bets);
            if(betObject.active == false){
              if(betObject.conclusion=="win"){
              person.total = person.total - betObject.amount;
              }else{
                person.total = person.total + betObject.amount;
              }
            }
          }
        }
      }
    }

    //updating local storage
    this.setData(this.dataName, this.personArray);

    //returning updated array
    return this.personArray;
  }

}
