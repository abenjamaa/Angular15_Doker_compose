import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy{

  users: User[];

  constructor(private readonly userService: UserService ){}

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe({
      next: (resp) => this.users = resp,
      error: (error) => console.error(error),
      complete: () => console.log("complete")
    });
  }
  ngOnDestroy(): void {
    
  }

  

}
