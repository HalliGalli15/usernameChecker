import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbInputModule, NbIconModule, NbFormFieldModule, NbButtonModule, NbCardModule, NbIconLibraries } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SiteGithubComponent } from './components/sites/site-github/site-github.component';
import { SiteStackOverflowComponent } from './components/sites/site-stackOverflow/site-stackOverflow.component';
import { ResultComponent } from './components/sites/results.component';
import { ResultCardModule } from 'projects/result-card/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SearchPageComponent,
    SiteGithubComponent,
    SiteStackOverflowComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    NbButtonModule,
    NbButtonModule,
    NbCardModule,
    NbEvaIconsModule,
    NbFormFieldModule,
    NbFormFieldModule,
    NbIconModule,
    NbIconModule,
    NbInputModule,
    NbInputModule,
    NbLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    ResultCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
