import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
username:string='';
useractive:string='';

constructor(private serve:UserService)
{

}

add()
{
  this.serve.addUser(this.username,this.useractive)
}

}
