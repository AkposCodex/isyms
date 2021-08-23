import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  contactForm = new FormGroup({
    name: new FormControl("Brian O'Riley"),
    email: new FormControl("brian-oreily@gmail.com"),
    phno: new FormControl("08032200445"),
    message: new FormControl("I would like to buy your work"),
  })
  constructor(
  ) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.contactForm.value)
    this.contactForm.reset()
  }

}
