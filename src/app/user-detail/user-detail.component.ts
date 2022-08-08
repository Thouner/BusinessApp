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
  userGet;


  constructor(private route: ActivatedRoute, private firestore: Firestore) {
    this.coll = collection(firestore, 'users');
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });
    // this.getUser()
    this.selectedUser = this.getUser(this.userId);
    console.log(this.selectedUser);

  }

   async getUser(id) {
    // this.selectedUser = doc(this.firestore, `user/${this.userId}`);
    // let userRefernce = doc(this.firestore, `user/${this.userId}`);
    // this.selectedUser = docData(userRefernce, { idField: 'id' });
    // this.selectedUser = this.coll.collectionData(this.coll, this.userId);

    // this.selectedUser = getDocFromCache(this.coll);

    const docRef = doc(this.firestore, `users/${id}`);
    const querySnapshot = await getDoc(docRef);
    return { id: querySnapshot.id, ...querySnapshot.data() };

  }


}



