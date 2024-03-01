import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'USER_SERVICE';
allUser:{name:string,active:string}[]=[]

constructor(private usersService:UserService)
{

}

ngOnInit(){
this.allUser=this.usersService.users;
}
}
