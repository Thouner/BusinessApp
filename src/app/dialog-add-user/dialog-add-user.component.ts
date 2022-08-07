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
  progressBar:boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: DialogData,
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
    if(this.birthDate){
      this.user.birthDate = this.birthDate.getTime();
    } else {
      let today = new Date;
      this.user.birthDate = today.getTime();
    }
    // console.log('user =', this.user);
    await addDoc(this.coll, { user: this.user.toJson() })
    // await setDoc(doc(this.coll), {user: this.user});
    this.progressBar = false;
    this.dialogRef.close();
  }

}
