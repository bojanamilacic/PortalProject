import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowMessageComponent } from './show-message/show-message.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
  { path: '', component: ShowMessageComponent, pathMatch: 'full', canActivate: [AuthenticationGuard] },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
