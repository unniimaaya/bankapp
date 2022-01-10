import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { deepStrictEqual } from 'assert';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // user="welcome user"

  acno=""
  pwd=""
  amount=""

  acno1=""
  pwd1=""
  amount1=""

  depositForm=this.fb.group({
     acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
     pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
     amount:['',[Validators.required,Validators.pattern('[0-9]*')]]
  })

 withdrawalForm=this.fb.group({
   acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
   pwd1:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
   amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]
 })

  user=this.ds.currentUserName

  constructor(private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){

  console.log(this.depositForm);

   if(this.depositForm.valid){
    var acno=this.depositForm.value.acno
    var pwd=this.depositForm.value.pwd
    var amount=this.depositForm.value.amount
     
    let result=this.ds.deposit(acno,pwd,amount)
  
    if(result){
      alert(amount+"credited to your accunt balance is"+result)
    }
   }

  // var acno=this.depositForm.value.acno
  // var pwd=this.depositForm.value.pwd
  // var amount=this.depositForm.value.amount
   
  // let result=this.ds.deposit(acno,pwd,amount)

  // if(result){
  //   alert(amount+"credited to your accunt balance is"+result)
  // }

  else{
    alert("invalid form")
  }
    // alert("deposit clicked")
  }




  withdrawal(){

    console.log(this.withdrawalForm);
    
   if(this.withdrawalForm.valid){
    var acno=this.withdrawalForm.value.acno1
    var pwd=this.withdrawalForm.value.pwd1
    var amount=this.withdrawalForm.value.amount1
     
    let result=this.ds.withdrawal(acno,pwd,amount)
  
    if(result){
      alert(amount+" debited your accunt balance is"+result)
    }
   }
 
  //  var acno=this.withdrawalForm.value.acno1
  //  var pwd=this.withdrawalForm.value.pwd1
  //  var amount=this.withdrawalForm.value.amount1
    
  //  let result=this.ds.withdrawal(acno,pwd,amount)
 
  //  if(result){
  //    alert(amount+" debited your accunt balance is"+result)
  //  }
    else{
      alert("invalid form")
    }

    // alert("withdrawal clicked")
  }
}




