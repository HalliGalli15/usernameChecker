import { map } from 'rxjs/operators';
import { GithubService } from './../Services/github.service';
import { Component, Input, OnInit } from '@angular/core';
import { SiteInformation } from '../Data/siteInformation.interface';

@Component({
  selector: 'app-site-github',
  templateUrl: './site-github.component.html',
  styleUrls: ['./site-github.component.scss']
})
export class SiteGithubComponent implements OnInit {
  @Input() username: string;

  public cardState: string;  
  public githubSiteInformation: SiteInformation;

  constructor(private readonly githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getData(this.username).pipe(
      map((data) => {
          return {
            name: data.login,
            description: "This username is already taken on Github.",
            url: data.html_url,
            author: data.name,
          };
        })
      ).subscribe(
        data => {
          this.githubSiteInformation = data
          this.cardState = 'danger';
        },
        err => {
          this.githubSiteInformation = {
            name: this.username,
            description: 'This username is available on Github. Try and make it your name!',
            url: 'https://github.com/',
            author: 'unknown',
          }
          this.cardState = 'success'
        },
        () => console.log('yay')
      );
  }
}
