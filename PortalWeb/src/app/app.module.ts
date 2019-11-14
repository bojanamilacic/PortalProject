import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatDialogModule,
        MatToolbarModule, MatInputModule, MatTooltipModule, MatBadgeModule, MatSelectModule, MatOptionModule, MatListModule } from '@angular/material';
import { DetailService } from './shared/detail.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommentsComponent } from './comments/comments.component';
import { MsAdalAngular6Module, AuthenticationGuard } from 'microsoft-adal-angular6';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { ShowMessageComponent } from './show-message/show-message.component';
import { AddMessageComponent } from './add-message/add-message.component';
import { CommonModule } from '@angular/common';
import { ApprovedMessageComponent } from './approved-message/approved-message.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    ShowMessageComponent,
    CommentsComponent,
    AddMessageComponent,
    ApprovedMessageComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatDialogModule,
    MatToolbarModule,
    MatTabsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatListModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    MatTooltipModule,
    MsAdalAngular6Module.forRoot({
      instance: 'https://login.microsoftonline.com/',
      tenant: '783f3846-1a66-47b4-9188-c2e65baabcfa', //
      clientId: '8deb6b84-8d3b-473f-8685-7de630899343', //
      redirectUri: 'http://localhost:4200/details',
      navigateToLoginRequestUrl: true, // false je bilo
      cacheLocation: 'localStorage',
    })
  ],
  entryComponents: [ AddMessageComponent, CommentsComponent, ApprovedMessageComponent],
  providers: [DetailService,
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
