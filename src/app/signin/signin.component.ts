import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinform! : FormGroup
  constructor(private formbuilder:FormBuilder, private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signinform=this.formbuilder.group(
      {
        name: [''],
        password:[''],
        // gender:[''],
        // state:[''],
        // phone:['']
      }
    )
  }
  signin() {
    this.http.get<any>('http://localhost:3000/user')
    .subscribe( res=>{ 
      const user=res.find((a:any)=>{
        return a.name===this.signinform.value.name
          a.password===this.signinform.value.password

      })
      if(user){
        alert("Welcome, Your authentication is successful");
        this.signinform.reset();
      }
      else{
        alert("Welcome, Your authentication is failed");
      }
      
     } )
  }

}
