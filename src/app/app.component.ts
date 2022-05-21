import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import "aos/dist/aos.css";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio';

  ngOnInit(): void {
    AOS.init({
            offset:"200",
            delay:"50",
            duration:"500",
            easing:"ease-in-out",
            mirror:"true",
            once:"false",
            anchorPlacement:"top"
  })
  }
  

}
