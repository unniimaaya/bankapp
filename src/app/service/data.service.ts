import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  currentAcno:any

  currentUserName:any

  users:any ={
    1000:{acno:1000,uname:"Neer",password:"1000",balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Laisha",password:"1001",balance:5000,transaction:[]},
    1002:{acno:1002,uname:"Vyom",password:"1002",balance:5000,transaction:[]}
  }



  constructor() {
    this.getDetails()
   }

  //store localstorage

    saveDetails(){
      if(this.users){
        localStorage.setItem("userDB",JSON.stringify(this.users))
      }
      if(this.currentUserName){
        localStorage.setItem("cUserName",JSON.stringify(this.currentUserName))
      }
      if(this.currentAcno){
        localStorage.setItem("cAcno",JSON.stringify(this.currentAcno))
      }
    }

    //to get values from localstorage
     getDetails(){
       if(localStorage.getItem("userDB")){
         this.users= JSON.parse(localStorage.getItem("userDB") || '')
       }
       if(localStorage.getItem("cUserName")){
         this.currentUserName= JSON.parse(localStorage.getItem("cUserName") || '')
       }
       if(localStorage.getItem("cAcno")){
         this.currentAcno = JSON.parse(localStorage.getItem("cAcno") || '')
       }
     }





  //register
  register(acno:any,password:any,uname:any){
    
    let db=this.users
    if(acno in db){
      return false
     
    }
    else{
      db[acno]={
        acno,
        password,
        uname,
        balance:0,
        transaction:[]
      }
      this.saveDetails()
      return true
    }
    // console.log();
    
  }


  //login
  login(acno:any,password:any){
    
    let database=this.users

    if(acno in database){

      if(password==database[acno]["password"]){
        // alert("login successfull")
        this.currentAcno=acno
        this.currentUserName=database[acno]["uname"]
        
      
        this.saveDetails()

       return true
        
      }
      else{
        alert("incorrect password")
        return false
      }
    }
    else{
       alert("invalid acccount no")
      return false
    }

}

//transaction 
getTransaction(){

  console.log( this.users[this.currentAcno].transaction);
  
   return this.users[this.currentAcno].transaction
}

//deposit amount

deposit(acno:any,password:any,amt:any){
 var amount=parseInt(amt)

  let db=this.users
  
  if(acno in db){
    
    if(password==db[acno]["password"]){

      db[acno]["balance"]=db[acno]["balance"]+=amount
     
      db[acno].transaction.push({
        amount:amount,
        type:"CREDIT"
      })


      this.saveDetails()
      return db[acno]["balance"]
    }
    else{
      alert("invalid password")
      return false
    }
  }
  else{
   
    alert("account does not exist")
    return false
  }

}

//withdrawal amount

withdrawal(acno:any,password:any,amt:any){
   var amount=parseInt(amt)
   let db=this.users
  
  if(acno in db){
    
    if(password==db[acno]["password"]){

      if(db[acno]["balance"]>amount){

      db[acno]["balance"]=db[acno]["balance"]-=amount

      this.saveDetails()

      return db[acno]["balance"]
      }
      else{
        alert("insufficient balance")
      }
    }
    else{
      alert("invalid password")
      return false
    }
  }
  else{
   
    alert("account does not exist")
    return false
  }

}

}
