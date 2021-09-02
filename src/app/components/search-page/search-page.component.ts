import { Router } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  username: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public openUrl() {
    this.username = (<HTMLInputElement>document.getElementById("username")).value;
    if (this.username) {
      this.router.navigate(['/result/', this.username]);
    }
  }

}
