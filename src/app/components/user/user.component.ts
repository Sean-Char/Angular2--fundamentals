import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

          // Dependency Injection happens here
  constructor(private dataService: DataService) { 
    console.log('constructor ran...');
    
  }

  ngOnInit() {
    console.log('ngOnInit ran...');
    
    this.name = 'Jon Doe';
    this.email = 'jdoe@gmail.com';
    this.age = 21;
    this.address = {
      street: '444 Main st',
      city: 'Dallas',
      state: 'TX',
    }
    this.hobbies = ['Write code', 'watch movies', 'play games'];
    this.hello = 'hello';

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

  onClick() {
    // console.log('HELLO');
    this.name = 'Sean Charoutanh';
    this.hobbies.push('Go Camping');
  }

  addHobby(hobby) {
    // console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for(let i = 0; i < this.hobbies.length; i++) {
      if (hobby === this.hobbies[i]) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street:string,
    city:string,
    state:string
}

interface Post {
  id: number,
  title:string,
  body:string,
  userId:number
}