import { Component } from '@angular/core';
import { Det } from './shared/model/det.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project11';
  detArray:Det[] = [];
  inputName = "";
  inputValue = 'test';
  

  constructor(){
    for(let i = 1; i <= 8; i++){
      this.detArray.push(new Det(i,`Датчик ${i}`));
    }
  }
  new(){ 
    if (this.detArray.length != 0){
      let id = this.detArray[this.detArray.length-1].id;
      this.detArray.push(new Det(id + 1, `Датчик ${this.inputName}`));
    }else{
      this.detArray.push(new Det(1, this.inputName));
    }
  }
  delete(item){
    let index = this.detArray.indexOf(item,0);
    this.detArray.splice(index,1);
  }
}
