import { Component, OnInit } from '@angular/core';
import { collection, doc, Firestore, setDoc, updateDoc } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { update } from '@firebase/database';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user: User;
  progressBar: boolean = false;
  userId: string;
  coll: any;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore, private route: ActivatedRoute) {
    this.coll = collection(this.firestore, 'users');
  }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  async saveUser() {
    this.progressBar = true;
    this.user.birthDate = this.user.birthDate.getTime();;
    await updateDoc(doc(this.coll, this.userId), { user: this.user.toJson() });
    console.log(this.user);
    this.progressBar = false;
    this.dialogRef.close();
    location.reload();
  }

}
