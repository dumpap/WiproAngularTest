import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TrainingCreateComponent } from './training-create.component';
//import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
//import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'training', component: TrainingCreateComponent }
    ]),
    SharedModule
  ],
  declarations: [
    //ProductListComponent,
    TrainingCreateComponent
    //ConvertToSpacesPipe
  ]
})
export class TrainingModule { }
