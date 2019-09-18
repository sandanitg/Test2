import { Component, OnInit } from '@angular/core';
import { User } from './user.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: Array<User>=[];
  selectedUser;

  newUser: User = new User();

  constructor() {
    this.users=[
      {
        name:"Anne",
        age: 20
      }
    ];
   }

  ngOnInit() {
    // let i=1;
    // let j=20;
    // let k= setInterval(()=>{
    //   this.users.push(
    //     {
    //       name:"User"+i,
    //       age:j
    //     }
    //   )
    //   j++;
    //   i++;
    // },1000)

}

selectUser(user: User){
  this.selectedUser=user;
  console.log(
    user.name, user.age
  )
}


onAdd(){

  console.log(this.newUser)
  this.users.push(this.newUser);

  this.newUser = new User();
}


}
