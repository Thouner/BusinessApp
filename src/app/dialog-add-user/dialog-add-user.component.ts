import { Component, Input, OnInit } from '@angular/core';
import { doc, Firestore } from '@angular/fire/firestore';
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
  coll:any;

  constructor(firestore: Firestore) {
    this.coll = collection(this.firestore, 'users');
   }

  ngOnInit(): void {

  }


  onNoClick(): void {
    // this.dialogRef.close();
    // console.log('zu');
  }


  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('user =', this.user);

    setDoc(doc(this.coll), {this.user});

  }

}
