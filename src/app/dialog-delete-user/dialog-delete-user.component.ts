import { Component, OnInit } from '@angular/core';
import { deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { collection } from '@firebase/firestore';

@Component({
  selector: 'app-dialog-delete-user',
  templateUrl: './dialog-delete-user.component.html',
  styleUrls: ['./dialog-delete-user.component.scss']
})
export class DialogDeleteUserComponent implements OnInit {

  userId: string = '';
  userFirstName: string = '';
  userLastName: string = '';
  coll: any;


  constructor(public dialogRef: MatDialogRef<DialogDeleteUserComponent>, private route: Router, private router: ActivatedRoute, private firestore: Firestore) {
    this.coll = collection(this.firestore, 'users');
  }


  ngOnInit(): void {
  }


  /**
   * delete the user and open the user component
   */
  deleteConfirm() {
    this.route.navigateByUrl('/user');
    this.dialogRef.close();
    deleteDoc(doc(this.coll, this.userId));
  }
}
