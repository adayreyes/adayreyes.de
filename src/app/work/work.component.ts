import { Component, OnInit } from '@angular/core';
import { Project } from "../models/project";
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projects = {
    sharkie: new Project("Sharkie","Game based OPP with Javascript","sharkiepc.jpg","https://aday-reyes.developerakademie.net/Sharkie-game/index.html"),
    join: new Project("Join","Game based OPP with Javascript","join.jpg","https://aday-reyes.developerakademie.net/Join/index.html"),
    pokedex: new Project("Pokedex","Game based OPP with Javascript","pokedex.jpg","https://aday-reyes.developerakademie.net/Pokedex/index.html"),
    ringoffire: new Project("Ring of fire","Game based OPP with Javascript","ringoffire.jpg","https://aday-reyes.developerakademie.net/ringoffire/"),
  }
  
  
}
