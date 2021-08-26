import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() title: string;
  @Input() describtion: string;
  @Input() author: string;
  @Input() url: string;
  @Input() state: string = 'success';

  constructor() { }

  ngOnInit(): void {
  }

  openUrl(): void {
    window.open(this.url, '_blank');
  } 
}
