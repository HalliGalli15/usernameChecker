import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-result-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {

  @Input() title: string;
  @Input() describtion: string;
  @Input() author: string;
  @Input() url: string;
  @Input() state: 'success' | 'danger';

  constructor() { }

  ngOnInit(): void {
  }

  public openUrl(): void {
    window.open(this.url, '_blank');
  } 
}
