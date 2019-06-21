import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HighlightComponent } from './highlight/highlight.component';
import { ProfileComponent } from './profile/profile.component';
import { SelectComponent } from './select/select.component';
import { UsersComponent } from './users/users.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path:'', redirectTo:'/highlight',pathMatch: 'full' },
  { path:'highlight', component: HighlightComponent },
  { path:'profile', component: ProfileComponent},
  { path:'select', component: SelectComponent},
  { path:'table', component: TableComponent},
  { path:'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
