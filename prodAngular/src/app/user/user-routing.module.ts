import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UpdateComponent } from './components/user/update/update.component';


const routes: Routes = [
 {path : '', component : UserComponent , pathMatch : 'full'}, 
 {path : 'update/:id', component : UpdateComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
