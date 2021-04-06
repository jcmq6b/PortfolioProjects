import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  icon: String = "menu";
  constructor() { }

  ngOnInit(): void {
  }

  switchIcon(checked: boolean) {
    if(checked){
      this.icon = "close"
    }else{
      this.icon="menu";
    }
  }

  unCheck(checkbox:any){
    checkbox.checked = false;
    this.switchIcon(false);
  }

}
