import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  pwd=""
  acno=""
  uname=""

   registerForm= this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    acno:['' ,[Validators.required,Validators.pattern('[0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  

  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){

    console.log(this.registerForm)

    if(this.registerForm.valid){
      var uname= this.registerForm.value.uname
      var acno= this.registerForm.value.acno
      var pwd= this.registerForm.value.pwd
    
     let result=this.ds.register(acno,pwd,uname)
    
     if(result){
      alert("registerd successfully")
      this.router.navigateByUrl("")
    
     }
     else{
       alert("account is already exist")
     }
    
    }
    else{
      alert("invalid form")
    }
    //reactive form
//   var uname= this.registerForm.value.uname
//   var acno= this.registerForm.value.acno
//   var pwd= this.registerForm.value.pwd

//  let result=this.ds.register(acno,pwd,uname)

//  if(result){
//   alert("registerd successfully")
//   this.router.navigateByUrl("")

//  }
//  else{
//    alert("account is already exist")
//  }
    
  }

}


// alert("register clicked")