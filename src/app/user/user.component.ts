import { Component, OnInit } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User;
  coll: any;
  allUsers: any[] = [];
  user$: Observable<any>;


  constructor(
    private router: Router,
    public dialog: MatDialog,
    private firestore: Firestore) {
    this.coll = collection(this.firestore, 'users');
    this.user$ = collectionData(this.coll, {idField: 'id'});
    this.user$.subscribe((newUser) => {
      this.allUsers = newUser;
      console.log(this.allUsers);

    });
  }

  ngOnInit(): void {
  }


  openDialog(): void {
    this.dialog.open(DialogAddUserComponent, {
      width: '450px',
    });
  }


}
