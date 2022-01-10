import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
 aim="Your Perfect Banking Partner"

 accno="account number please"

 acno=""

 pwd=""

 loginForm=this.fb.group({
   acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]

 })

  // users:any ={
  //   1000:{acno:1000,uname:"Neer",password:"1000",balance:5000},
  //   1001:{acno:1001,uname:"Laisha",password:"1001",balance:5000},
  //   1002:{acno:1002,uname:"Vyom",password:"1002",balance:5000}
  // }

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  acnochange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }

  pwdchange(event:any){
    this.pwd=event.target.value
    console.log(this.pwd);
    
  }


  // login(){
  //   var acno=this.acno
  //   var password=this.pwd
  //   let database=this.ds.users

  //   if(acno in database){

  //     if(password==database[acno]["password"]){
  //       alert("login successfull")

  //       this.router.navigateByUrl('dashboard')
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("invalid acccount no")
  //   }


    // alert("login clicked")
  // }



//template reference variable
  // login(a:any,p:any){
  // console.log(a)
  

  //   var acno=a.value
  //   var password=p.value

  //   let database=this.users

  //   if(acno in database){

  //     if(password==database[acno]["password"]){
  //       alert("login successfull")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("invalid acccount no")
  //   }


   
  // }

  login(){

  console.log(this.loginForm);
  
  if(this.loginForm.valid){

    var acno=this.loginForm.value.acno
    var password=this.loginForm.value.pwd

    let result= this.ds.login(acno,password)
    if(result){
      alert("login successfully")
      this.router.navigateByUrl('dashboard')
    }
  }
  else{
    alert("invalid form")
  }
  }

}
