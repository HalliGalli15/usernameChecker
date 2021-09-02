import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbIconModule, NbFormFieldModule, NbButtonModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SiteGithubComponent } from './components/sites/site-github/site-github.component';
import { SiteStackOverflowComponent } from './components/sites/site-stackOverflow/site-stackOverflow.component';
import { ResultComponent } from './components/sites/results.component';
import { ResultCardModule } from 'projects/result-card/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    SiteGithubComponent,
    SiteStackOverflowComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbInputModule,
    NbEvaIconsModule,
    NbIconModule,
    NbFormFieldModule,
    NbButtonModule,
    NbCardModule,
    ResultCardModule,
    NbButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
