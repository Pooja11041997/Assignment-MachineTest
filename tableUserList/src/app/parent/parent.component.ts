import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  userList : Array<string> = ["User1","User2","User3","User4","User5"];
  userDetails :Array<any> =  [[1,"Pooja",23,"Female","Karnataka"],
                             [ 2, "Prajna" , 19,"Female","Karnataka"],
                             [ 3,"Ricky",25,"Male","Kerala"],
                             [4, "John",35,"Male","Maharashtra"],
                             [5,"Kiran",17,"Male","UP"]];
  details : Array<any> = [];
  showInfo : boolean = false;

  constructor() { }

  getDetails(user){
    var index = this.userList.indexOf(user);
    this.details = this.userDetails[index];
    this.showInfo = true;
  }

}
