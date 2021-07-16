import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute!: String;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.currentRoute = params['name']
      console.log(this.currentRoute)
    })

    // switch(this.currentRoute){
    //   case "about":
    //     @ViewChild('about') a_span: ElementRef
    //     break
    //   case "":
    //     @ViewChild('home')
    // }
   }
  title = 'syms-site';
}
