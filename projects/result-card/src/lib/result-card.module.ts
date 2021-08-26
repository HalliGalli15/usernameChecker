import { NbCardModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { ResultCardComponent } from './result-card.component';

@NgModule({
  declarations: [ResultCardComponent],
  imports: [
    NbCardModule
  ],
  exports: [ResultCardComponent]
})
export class ResultCardModule { }
