import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {

constructor(private loggServe:LoggerService)
{

}
  users = [
    {  name: 'Megha', active: 'active' },
    { name: 'Ramesh', active: 'active' },
    {  name: 'Aniruddha', active: 'not active' },
    { name: 'Suhas', active: 'active' }
  ]


  addUser(username: string, useractive: string) {
    this.users.push({name: username,active: useractive });
    this.loggServe.loggerServe(username,useractive)
  }







deleteUser(userName:string)
{
  this.users = this.users.filter(x=>x.name!=userName);
console.log(this.users);
}
}

