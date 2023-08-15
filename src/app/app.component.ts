import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,FormControlName, Validators} from '@angular/forms';
import {Observable ,of} from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lazy';
  
  loginForm = new FormGroup({
    user: new FormControl('',[Validators.required, Validators.pattern("[a-zA-Z].*")]),
    email: new FormControl('',[Validators.required , Validators.email]),
    mobile: new FormControl('',[Validators.required , Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)])
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }
  get user(){
    return this.loginForm.get('user')
  }
  get email(){
    return this.loginForm.get("email")
  }
  get mobile(){
    return this.loginForm.get("mobile") 
  }

  data=10;
  updateItem(){
    this.data= Math.floor(Math.random()*10);
  }
  data1 = "x";
  updateData(item:string){
    console.warn(item)
    this.data1=item;
  }
  // myObservable = new Observable((observer)=>{
  // console.log('Observable start');
  //   observer.next("1")
  //   observer.next("2")
  //   observer.next("3")
  //   observer.next("4")
  //   observer.next("5")
  // });
  array1=[1,2,3,4]
  array2= ['A','B','C']
  myObservable = of(this.array1, this.array2);
  ngOnInit(){
    this.myObservable.subscribe((val) =>{
          console.log(val);
    });
  }
}
