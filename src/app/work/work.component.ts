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
    new Project("Sharkie","Game based OPP with Javascript","sharkiepc.jpg","https://aday-reyes.developerakademie.net/Sharkie-game/index.html","sharkie","javascript"),
    new Project("Join","Game based OPP with Javascript","join.jpg","https://aday-reyes.developerakademie.net/Join/index.html","join","javascript"),
    new Project("Pokedex","Game based OPP with Javascript","pokedex.jpg","https://aday-reyes.developerakademie.net/Pokedex/index.html","pokedex","javascript"),
    new Project("Ring of fire","Game based OPP with Javascript","ringoffire.jpg","https://aday-reyes.developerakademie.net/ringoffire/","ringoffire","angular"),
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
