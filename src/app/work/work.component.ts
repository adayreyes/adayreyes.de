import { Component, OnInit } from '@angular/core';
import { Project } from "../models/project";
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  angular = true;
  javascript = true;
  constructor() { }

  ngOnInit(): void {
  }

  projects = [
    new Project("Sharkie","Fight your enemies as Sharkie in a jump and run game. (Javascript)","sharkiepc.jpg","https://aday-reyes.developerakademie.net/Sharkie-game/index.html","sharkie","javascript"),
    new Project("Join","Kanban board for project managament. (Javascript)","join.jpg","https://aday-reyes.developerakademie.net/Join/index.html","join","javascript"),
    new Project("Pokedex","Search for your favorite Pokemons or discover new ones. Don't forget to add them to your favorites! (Javascript and REST API)","pokedex.jpg","https://aday-reyes.developerakademie.net/Pokedex/index.html","pokedex","javascript"),
    new Project("Ring of fire","Popular drinking game to play online with friends. (Angular and Firebase)","ringoffire.jpg","https://ring-of-fire-3f187.web.app","ringoffire","angular"),
  ]
  

  showAllProjects(){
    let projects = document.getElementsByClassName("project");
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      project.classList.remove("none")
    }
  }

  showAngularProjects(){
    this.showAllProjects();
    let javascript_projects = document.getElementsByClassName("javascript");
    for (let i = 0; i < javascript_projects.length; i++) {
      let project = javascript_projects[i];
      project.classList.add("none");
    }
  }

  showJavascriptProjects(){
    this.showAllProjects();
    let angular_projects = document.getElementsByClassName("angular");
    for (let i = 0; i < angular_projects.length; i++) {
      let project = angular_projects[i];
      project.classList.add("none");
    }
  }

  

  
}
