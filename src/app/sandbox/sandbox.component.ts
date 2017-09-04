import {Component} from '@angular/core';
import {Customer} from '../Customer'; //./if it is in the same folder
import {MyservicesService} from './../services/myservices.service';
@Component({
    selector: 'sandbox',
    templateUrl: `./sandbox.component.html`,
    styleUrls:['./sandbox.component.css']

})

export class SandboxComponent {
    data:any[]=[];
    user = {
        name:'',
        age:'',
        phone:'',
        email:''
    }
    myusers:any[]=[];
    myuser = {
        name:'',
        phone:'',
        email:''
    };
    
    users = ['Jean','Eric'];
    text:string="Hello unchanged";
    birthday = new Date(1988,15,8);
    currentClasses = {};
    currentStyles={}
    //saveable:boolean=false;
    isSpecial:boolean=true;
    canSave:boolean=true;
    imageUrl:string='http://lorempixel.com/400/200';
    isUnchanged:boolean=true;    
    name:string= "Herimanitra";
    age: number= 35;
    people=['ricky','john','glenn'];
    person = {
        firstname: 'steve',
        lastname: 'mayer'
    }
    hasChildren: boolean=true;
    city:any='boston';
    arrayofnum:number[]=[10,1,22];
    arrayofstr:string[]=["hello","world"];
    anyarray:any[]=[10,"hello",true];
    mytuple:[string,number]=["john",15];
    myvoid:void=undefined;
    myundef:undefined=undefined;
    mynull:null=null;
    customer:Customer;
    greeting:number=3;
    //we can define an array of customer like in Java:
    customers:Customer[];
    usersfromserv:string[];
    
    constructor(public dataservice:MyservicesService) {
       
        //here is the observable:
        this.dataservice.getUsersHttp().subscribe(u=>{
            this.data=u;
        });
        //here is the observable:
       // this.dataservice.getData().subscribe(data=>{
         //   this.data.push(data);
        //});
        this.usersfromserv=this.dataservice.getUsers();
        console.log(this.usersfromserv);
        this.hasChildren=false;
        this.hasbirthday();
        this.setCurrentStyles();
        this.setCurrentClasses();
        this.customer=
        {
            id:"RANH15088800",
            name:"HERIMANITRA",
            email:"airmanitra@gmail.com"

        } ;
        //dont forget []
        this.customers=[
        {
            id:"RANH15088800",
            name:"HERIMANITRA",
            email:"airmanitra@gmail.com"

        } ,
        {
            id:"RASCED15089400",
            name:"CEDRICK",
            email:"rced@gmail.com"
        } ]
    }
    insertForm({value,valid}) {
        if (valid) {
            console.log(value)
        } else {
            console.log("formi is invalid")
        }
        //this.users.push(this.name);
        //this.name='';
        //console.log(this.name);
        //console.log("form submitted");
    }
    changeText() {
        this.text="hELLO changed";
    }
    fireEvent(e,greeting)
    {
        alert(e.type);
       // console.log("button clicked");
        console.log(greeting);
        
    }
    setCurrentStyles () {
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px'
        }
    }
    setCurrentClasses()  {
        this.currentClasses={
        saveable: this.canSave,
        special: this.isSpecial
    }   
    }
    hasbirthday(){
        this.age += 1;
    }
    showName() {
        return false;
    }
    showAge()
    {
        return this.age;
    }
     //onSubmit function which calls a service
     onSubmit() {
        this.dataservice.addUser(this.myuser).subscribe(user=>{
            console.log(user);
            //like push
            this.myusers.unshift(user);
        });
    }
    
}
