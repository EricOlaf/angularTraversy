import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    //template: '<h2>Eric Olaveson</h2>'
    // styles: [`h2{
    //     color: blue
    // }`]
})

export class UserComponent{
    //Properties
    firstName: string;
    lastName: string;
    age: number;
    address;

    //Methods
    //runs when a component is initialized.
    //put things in here you want when the page is initialized.
    //ng on init is where we do ajax calls
    constructor(){
        // console.log(this.age);
        // this.sayHello();
        // this.hasBirthday();
        // console.log(this.age)
        this.firstName = "Eric";
        this.lastName = "Olaveson";
        this.age = 30;
        this.address = {
            street: 'easy street',
            city: 'Dallas',
            zip: '97323'
        }

    }

    // sayHello(){
    //     console.log(`Hello ${this.firstName}`)
    // }

    // hasBirthday(){
    //     this.age ++;
    // }

}