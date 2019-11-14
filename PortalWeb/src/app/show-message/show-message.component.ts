import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddMessageComponent } from '../add-message/add-message.component';
import { DetailService } from '../shared/detail.service';
import { ToastrService } from 'ngx-toastr';
import { CommentsComponent } from '../comments/comments.component';
import { AuthenticationService } from '../_service/authentication.service';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { ApprovedMessageComponent } from '../approved-message/approved-message.component';
import { FormBuilder } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.css']
})

export class ShowMessageComponent implements OnInit {
  getEmail: any;
  searchText;
  deleteForm: any;
  restoreForm: any;
  countmessages: number;
  showcountmessages: boolean;
 constructor(public dialog: MatDialog, public service: DetailService, public toastr: ToastrService,
             public authenticationService: AuthenticationService, public router: Router, private formBuilder: FormBuilder) {
             }
  ngOnInit() {

      this.service.getNotApprovedMessageCount().pipe(first()).subscribe((data: number) => {
      this.countmessages = data;
       });
      this.service.refreshMessageList();
      this.service.getNotApprovedMessageCount();
      let getToken = localStorage.getItem('adal.idtoken');
      let decode = jwt_decode(getToken);
      let email = decode.email;
      this.getEmail = email;
      localStorage.setItem('email', email);

      this.deleteForm = this.formBuilder.group({
        IsDeleted: 'true',
      });
      this.restoreForm = this.formBuilder.group({
        IsDeleted: 'false',
      });
}

  openDialog(): void {
    const dialogRef = this.dialog.open(AddMessageComponent, {
      width: '800px',
      height: '300px',
    });
  }
  openCommentDialog(MessageId: number): void {
    let listOfComments = this.service.messages.find(x => x.MessageId === MessageId).ListOfComments;
    const dialogRef = this.dialog.open(CommentsComponent, {
      width: '800px',
      height: '600px',
      data: {
        MessageId,
        listOfComments,
     },
   });
  }
 openApprovedMessageDialog(): void {
    const dialogRef = this.dialog.open(ApprovedMessageComponent, {
      width: '800px',
      height: '600px',
    });
    this.showcountmessages = true;
   }
onDelete(MessageId, TextMessage, Email, Group) {
    let deleted = {
      MessageId,
      Email,
      TextMessage,
      Group,
      IsDeleted: this.deleteForm.value.IsDeleted,
    };
    this.service.putMessageDetail(MessageId, deleted).subscribe(
      res => {
        this.service.refreshMessageList();
        this.service.getNotApprovedMessageCount();
        this.toastr.warning('Sadržaj nije odobren');
      },
      err => {
        this.toastr.error('Pokušajte ponovo', 'Došlo je do greške', );
      }
    );
  }
  onRestore(MessageId, TextMessage, Email, Group) {
    let restore = {
      MessageId,
      Email,
      TextMessage,
      Group,
      IsDeleted: this.restoreForm.value.IsDeleted,
    };
    this.service.putMessageDetail(MessageId, restore).subscribe(
      res => {
        this.service.refreshMessageList();
        this.service.getNotApprovedMessageCount();
        this.toastr.success('Sadržaj je vraćen');

      },
      err => {
        this.toastr.error('Pokušajte ponovo', 'Došlo je do greške');
      }
    );
  }
  logout() {
    this.authenticationService.logout();

  }
  onLogoClick() {
    location.reload();
  }
}
