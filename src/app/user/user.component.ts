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
  // displayedColumns: string[] = ['Name', 'Last name', 'Birth date', 'Email', 'Street', 'Street', 'City', 'PostalCode',];
  // columnsToDisplay: string[] = this.displayedColumns.slice();
  // data: any[] = [this.user.toJson()];


  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }


  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
      width: '450px',
    });
  }


}
