import { FormControl, FormGroup } from "@angular/forms";
import { User } from "../models/user.model";
import { Component, OnInit } from '@angular/core';
import { Store, select } from "@ngrx/store";
import { login } from "../store/actions";
import { uniqueUser } from "../store/selectors";
import { Observable } from "rxjs";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  // user!: Observable<String>;
  

  adminForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })

  submit() {
    const form = this.adminForm.value 
    console.log(form)
    this.adminForm.reset()
    this.store.dispatch(login(form))
  }

  constructor(private store: Store) { }
  ngOnInit(): void {
    // console.log(this.user)
  }

}
