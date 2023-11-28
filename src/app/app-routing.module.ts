import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRtlComponent } from './ui/ui-rtl/ui-rtl.component';
import { UiLtrComponent } from './ui/ui-ltr/ui-ltr.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  { path: '', component: UiRtlComponent },
  { path: 'rtl', component: UiRtlComponent },
  { path: 'ltr', component: UiLtrComponent },
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
