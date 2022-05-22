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
    let dropmenu = document.getElementById("drop-menu");
    if(this.open){
      dropmenu.style.display = "flex";
      if(dropmenu.classList.contains("hideup")){
        dropmenu.classList.replace("hideup","fadedown")
      } else{
        dropmenu.classList.add("fadedown")
      }
      document.body.style.overflowY="hidden"
    } else{
      dropmenu.classList.replace("fadedown","hideup");
      setTimeout(() => {
        dropmenu.style.display = "none";
        document.body.style.overflowY="auto"
      }, 500);
    }
  }
}


