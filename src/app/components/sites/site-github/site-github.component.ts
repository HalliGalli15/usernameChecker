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
  
  public githubSiteInformation: SiteInformation;

  constructor(private readonly githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getData(this.username).pipe(
      map((data) => {
          return {
            name: data.login,
            description: data.bio,
            url: data.html_url,
            author: data.name,
          };
        })
      ).subscribe((information) => {
        this.githubSiteInformation = information;
      });
  }

}
