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
  selectableImages: string[] = ['Gingerbread', 'Grinch', 'Reindeer', 'penguin', 'santa', 'snowman'];


  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    private firestore: Firestore) {
    this.coll = collection(this.firestore, 'users');
  }


  ngOnInit(): void {
  }


/**
 * closing the dialog
 */
  onNoClick(): void {
    this.dialogRef.close();
  }


/**
 * save the user
 */
  async saveUser() {
    this.progressBar = true;
    this.saveNameAndBirth();
    this.saveAddressEmailAndImg();
    await addDoc(this.coll, { user: this.user.toJson() })
    this.progressBar = false;
    this.dialogRef.close();
  }


/**
 * save name and birthday
 */
  saveNameAndBirth(){
      if (!this.user.firstName) {
      this.user.firstName = 'empty';
    }
    if (!this.user.lastName) {
      this.user.lastName = 'empty';
    }
    if (!this.birthDate) {
      this.user.birthDate = 'empty';
    }
    else {
      this.user.birthDate = this.birthDate.getTime();
    }
  }


/**
 * save the address, email and picture
 */
  saveAddressEmailAndImg(){
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
    if (!this.user.image) {
      this.user.image = 'santa';
    }
  }
}
