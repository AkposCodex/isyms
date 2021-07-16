import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentRoute!: String;
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.currentRoute = params['name']
    })

    
   }

  ngOnInit(): void {
  }

}
