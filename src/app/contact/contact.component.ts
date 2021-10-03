import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // login$: Observable<>

  contactForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phno: new FormControl(""),
    message: new FormControl(""),
  })
  constructor(
  ) { }

  ngOnInit(): void {
  }

  submit() {
    const render = this.contactForm.value
    console.log(render)
    this.contactForm.reset()
  }

}
