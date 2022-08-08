import { Component, OnInit } from '@angular/core';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { collection } from '@firebase/firestore';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: string = '';
  coll: any;
  selectedUser: any = '';


  constructor(private route: ActivatedRoute, private firestore: Firestore) {
    this.coll = collection(firestore, 'users');
  }

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    await this.getUser(this.userId)
    console.log('dieser User', this.selectedUser);
  }


  async getUser(id:string ) {
    const docRef = doc(this.firestore, `users/${id}`);
    const querySnapshot = await getDoc(docRef);
    this.selectedUser = querySnapshot.data();
    }


}



