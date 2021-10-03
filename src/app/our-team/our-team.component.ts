import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.scss']
})
export class OurTeamComponent implements OnInit {

  config = {
    backdrop: true,
    ignoreBackdropClick: true

  }
  constructor(private modalService: BsModalService) { }
  modalRef!: BsModalRef;
  modalRef2!: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  ngOnInit(): void {

  }

}
