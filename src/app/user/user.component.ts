import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

user: User = new User;
birthDate:Date;


  constructor(public dialog: MatDialog) {
    // this.birthDate
    // this.user.firstName
  }

  ngOnInit(): void {
  }


  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
      width: '450px',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed', result);

    // });
  }


}
