import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  birthDate:any = '';
  userId: string = '';
  selectedUser: any;
  user: User = new User();


  constructor(public dialog: MatDialog, private route: ActivatedRoute, private firestore: Firestore) {

  }


  async ngOnInit() {

    let bd = this.user.birthDate;

    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    await this.getUser(this.userId)

    if(this.user.birthDate != 'empty'){
      let milliSeconds = this.user.birthDate;
      let date = new Date(milliSeconds);
      this.birthDate = date.toLocaleDateString();
    } else{
      this.birthDate = 'empty';
    }
  }


  async getUser(id: string) {
    const docRef = doc(this.firestore, `users/${id}`);
    const querySnapshot = await getDoc(docRef);
    this.selectedUser = querySnapshot.data();
    this.user = new User(this.selectedUser.user);
  }


  openEditDialog() {
    const dialog = this.dialog.open(DialogEditUserComponent, {
      width: '450px',
    });
    // dialog.componentInstance.user = this.user;
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
  }
}



