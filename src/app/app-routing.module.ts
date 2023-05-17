import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {path:"pages/list", component: ListComponent},
  {path:"pages/create", component: CreateComponent},
  {path:"pages/about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
