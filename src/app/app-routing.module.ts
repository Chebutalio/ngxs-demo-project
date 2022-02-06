import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemInputComponent } from "./components/list-item-input/list-item-input.component";
import { ListContainerComponent } from "./components/list-container/list-container.component";

const routes: Routes = [
  { path: '', component: ListItemInputComponent },
  { path: 'list', component: ListContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
