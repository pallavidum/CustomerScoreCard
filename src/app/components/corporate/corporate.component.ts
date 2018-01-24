import { Component, OnInit } from '@angular/core';
import { CorporateService } from './corporate.component.service'
import { Observable } from 'rxjs/Observable';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { ModalComponent } from './../modal/modal.component'
import { Router } from '@angular/router'

@Component({
  selector: 'student',
  templateUrl: './corporate.component.html'
})
export class CorporateComponent implements OnInit {
  title = 'Corporate';
  studentList = [
    { "name": "pallavi", "id": 1 },
    { "name": "manasa", "id": 2 },
    { "name": "chaitu", "id": 3 },
    { "name": "pavan", "id": 4 },
    { "name": "swati", "id": 5 },

  ];
  currentUrl = "";
  auditInfoData: any[] = [];
  //   auditInfo=[ 
  //  {auditInfoId: 54, scaleTicket: 12377232, trailerID: "D12127", sourceLocation: "PERDUE FARMS - ACCOMAC", targetLocation: "Linkwood"},
  //  {auditInfoId: 48, scaleTicket: 11111111, trailerID: "D04485", sourceLocation: "HAIN PURE PROTEIN CO", targetLocation: "Terre Hill"},
  //   {auditInfoId: 42, scaleTicket: 12387276, trailerID: "D32005", sourceLocation: "PERDUE FARMS - LEWISTON", targetLocation: "Lewiston"},
  //   {auditInfoId: 41, scaleTicket: 12377230, trailerID: "D32078", sourceLocation: "PERDUE FARMS - LEWISTON", targetLocation: "Lewiston"},
  //   {auditInfoId: 39, scaleTicket: 12380110, trailerID: "N04521", sourceLocation: "MOUNTAIRE FARMS", targetLocation: "Wadesboro"}, 
  //  {auditInfoId: 38, scaleTicket: 12376676, trailerID: "N04602", sourceLocation: "AMICK FARMS- BATESBURG", targetLocation: "Wadesboro"},
  //  {auditInfoId: 37, scaleTicket: 12389387, trailerID: "D32048", sourceLocation: "PERDUE FARMS - LEWISTON", targetLocation: "Lewiston"}
  //   ]
  constructor(private corpservice: CorporateService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.getPendingRecords();
    this.currentUrl = this.router.url;
  }



  setWidthColor = function (severity) {
    switch (severity) {
      case 0:
        return 'progress-bar-success';
      case 1:
        return 'progress-bar-success';
      case 2:
        return 'progress-bar-yellow';
      case 3:
        return 'progress-bar-orange';
      case 4:
        return 'progress-bar-danger';
      case 5:
        return 'progress-bar-danger';
    }

  };
  openReviewModal = function (content) {
    // this.modalService.open(content,{ size: 'lg' });
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.selectedAuditData = content;//ModalComponent is dynamically creating so add ModalComponent in entrycomponents array
  // modalRef.componentInstance.close=this.close;
  // modalRef.componentInstance.dismiss=this.dismiss;
  
  }


  getStudents() {
    this.corpservice.getList().subscribe(function (data) {
      console.log(data);
    });
  }


  getPendingRecords() {
    this.corpservice.getPendingRec().subscribe((resp: any) => {
      // this.auditInfoData = resp;
      // console.log(this.auditInfoData);
      this.prepareCorporateDetails(resp);
    });
  }
  prepareCorporateDetails = function (data) {
    let severityLevel;
    data.forEach(obj => {

      if (obj.scoringStatusText === "NEW") {
        obj.corporateComment = obj.comment;
        obj.corporateSeverity = obj.recommendedSeverity;
        obj.severityLevel = obj.corporateSeverity;
      }
      else if (obj.scoringStatusText === "APPROVED" || obj.scoringStatusText === "REJECTED") {
        obj.severityLevel = obj.managementSeverity;
        obj.managementCommentKeyword = obj.managementComment, obj.keywordsList;
        obj.keywords = obj.managementComment, obj.keywordsList;
      }
      else if (obj.scoringStatusText === "SUBMITTED" && this.currentUrl == '/management') {

        if (obj.managementSeverity === 0) {//initially replace corporate severity with management severity
          obj.managementSeverity = obj.corporateSeverity;
          obj.managementComment = obj.corporateComment;
        }
        obj.severityLevel = obj.managementSeverity
      }
      else {
        //when status is 'EDITED' & 'SUBMITTED' for corporate
        //display corporate serverity for corporate users until status is approved/rejected.
        obj.severityLevel = obj.corporateSeverity;
      }
      //width for progress bar.
      var width = obj.severityLevel;
      if (obj.severityLevel === 0) {
        width = 0.5;
      }
      obj.setWidth = width * 20;
      this.auditInfoData.push(obj);
      obj.approve = false;

    });

  };

  // close = function () {
  //  this.modalRef.close();
  //   console.log("close");
  // }

  dismiss = function () {
    console.log("close");
  }


}
