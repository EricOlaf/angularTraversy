import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended: boolean = true;

  constructor() { }


  //lifecycle method that runs when the component is rendered
  ngOnInit() {
    this.users = [
      {
        firstName : "John",
        lastName : "Doe",
        age : 30,
        address: {
            street : "Easy Street",
            city: "Dallas",
            state: "TX"
        }
      },
      {
        firstName : "Kevin",
        lastName : "Dope",
        age : 20,
        address: {
            street : "Hard Street",
            city: "Dallas",
            state: "TX"
          }
      },
      {
        firstName : "Abby",
        lastName : "Wifey",
        age : 26,
        address: {
            street : "Hot Street",
            city: "Dallas",
            state: "TX"
        }
      }
    ]
    this.addUser(
      {
        firstName : "Eric",
        lastName : "Compy"
        // age : 30,
        // address: {
        //     street : "Eat Street",
        //     city: "Dallas",
        //     state: "TX"
        // }
      }
    )
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
