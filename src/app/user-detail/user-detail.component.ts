import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  birthDate: any = '';
  userId: string = '';
  selectedUser: any;
  user: User = new User();


  constructor(public dialog: MatDialog, private route: ActivatedRoute, private firestore: Firestore) { }


  /**
   * loading the user details
   */
  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    await this.getUser(this.userId)
  }


  /**
   * assigning the birthday
   */
  assigningBirthday() {
    if (this.user.birthDate != 'empty') {
      let milliSeconds = this.user.birthDate;
      let date = new Date(milliSeconds);
      this.birthDate = date.toLocaleDateString();
    } else {
      this.birthDate = 'empty';
    }
  }


  /**
   * loading the selected user
   *
   * @param id - id under which the user is stored
   */
  async getUser(id: string) {
    const docRef = doc(this.firestore, `users/${id}`);
    const querySnapshot = await getDoc(docRef);
    this.selectedUser = querySnapshot.data();
    this.user = new User(this.selectedUser.user);
  }


  /**
   * opening the edit components
   */
  openEditDialog() {
    const dialog = this.dialog.open(DialogEditUserComponent, {
      width: '450px',
    });
    dialog.componentInstance.user = new User(this.user.toJson());
    dialog.componentInstance.userId = this.userId;
    dialog.componentInstance.currentBirthDate = this.user.birthDate;
  }


  /**
   * open the delete componente
   */
  deleteUser() {
    const dialog = this.dialog.open(DialogDeleteUserComponent, {
      width: '450px',
    });
    dialog.componentInstance.userId = this.userId;
    dialog.componentInstance.userFirstName = this.user.firstName;
    dialog.componentInstance.userLastName = this.user.lastName;
  }
}



