import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  selectedAuditData: any;
  recommendedImages:any[]=[];
  resourceImages:string= "http://webdev01.valleyproteins.com/score/Media/Uploads/";
  ngOnInit() {
  console.log(this.selectedAuditData.auditProofList);
    this.selectedAuditData.auditProofList.forEach(element => {
      this.recommendedImages.push({"src":this.resourceImages+element.proofUrl,"id":element.id});
    });

    console.log(this.recommendedImages);
  }

  closeModal() {
    this.activeModal.close();
  }
}
