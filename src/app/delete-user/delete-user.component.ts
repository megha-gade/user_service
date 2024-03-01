
import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'] // Fix: Use 'styleUrls' instead of 'styleUrl'
})
export class DeleteUserComponent {
  deleteUserName: string = '';

  constructor(private serve:UserService) {}


ngOnInit():void
{

}

delete()
{
this.serve.deleteUser(this.deleteUserName);
}

    }


