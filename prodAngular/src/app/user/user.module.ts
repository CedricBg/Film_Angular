import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './components/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAccordionModule, NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbListModule, NbUserModule } from '@nebular/theme';
import { RegisterComponent } from './components/user/register/register.component';
import { UpdateComponent } from './components/user/update/update.component';



@NgModule({
  declarations: [
    RegisterComponent,
    UserComponent,
    UpdateComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    NbListModule,
    NbUserModule,
    NbInputModule,
    NbButtonModule,
    NbAutocompleteModule,
    NbAccordionModule,
    NbCheckboxModule,
    NbIconModule,
  ]
})
export class UserModule { }
