import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-github',
  templateUrl: './site-github.component.html',
  styleUrls: ['./site-github.component.scss']
})
export class SiteGithubComponent implements OnInit {
  @Input() username: string;

  constructor() { }

  ngOnInit() {
  }

}
