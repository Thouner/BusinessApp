import { Component, Inject, Input, OnInit } from '@angular/core';
import { addDoc, doc, Firestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { collection, setDoc } from '@firebase/firestore';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User;
  birthDate: Date;
  coll: any;
  progressBar: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore) {
    this.coll = collection(this.firestore, 'users');
  }

  ngOnInit(): void {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  async saveUser() {
    this.progressBar = true;

    if (!this.user.firstName) {
      this.user.firstName = 'empty';
    }
    if (!this.user.lastName) {
      this.user.lastName = 'empty';
    }
    if (!this.birthDate) {
      this.user.birthDate = 'empty';
      console.log(this.user.birthDate);
    }
    else {
      this.user.birthDate = this.birthDate.getTime();
      // this.user.birthDate = this.user.birthDate.getTime();
      // this.user.birthDate = this.user.birthDate.toLocaleDateString();
      console.log(this.user.birthDate);
    }
    if (!this.user.email) {
      this.user.email = 'empty';
    }
    if (!this.user.street) {
      this.user.street = 'empty';
    }
    if (!this.user.city) {
      this.user.city = 'empty';
    }
    if (!this.user.postalCode) {
      this.user.postalCode = 'empty';
    }
    await addDoc(this.coll, { user: this.user.toJson() })
    // await setDoc(doc(this.coll), {user: this.user});
    this.progressBar = false;
    this.dialogRef.close();
  }

}
