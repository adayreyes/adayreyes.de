import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  open = false;
  dropMenu(){
    if(!this.open){
      this.open = true;
    } else{
      this.open = false;
    }
    this.checkDropMenu();
  }
  checkDropMenu(){
    if(this.open){
      document.getElementById("drop-menu").style.display = "flex";
    } else{
      document.getElementById("drop-menu").style.display = "none";
    }
  }
}


