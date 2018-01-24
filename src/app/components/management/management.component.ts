import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'management',
  templateUrl: './management.component.html'
})
export class ManagementComponent implements OnInit {
  title = 'management';
  id: string;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
  }
}
