import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { collection } from '@firebase/firestore';
import { User } from 'src/models/user.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: string = '';
  selectedUser: any;
  user: User = new User();


  constructor(public dialog: MatDialog, private route: ActivatedRoute, private firestore: Firestore) {

  }


  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    await this.getUser(this.userId)

  }


  async getUser(id: string) {
    const docRef = doc(this.firestore, `users/${id}`);
    const querySnapshot = await getDoc(docRef);
    this.selectedUser = querySnapshot.data();
    this.user = new User(this.selectedUser.user);
  }


  openEditDialog(){
    this.dialog.open(DialogEditUserComponent, {
      width: '450px',
    });

  }
}



