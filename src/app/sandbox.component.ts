import {Component} from '@angular/core';
@Component({
    selector: 'sandbox',
    template: `
    <h1>{{name}} is {{age}} years old</h1>
    <h2>my name is {{person.firstname}} {{person.lastname}}</h2>
    <ul>
    <li>{{showAge()}}</li>
    </ul>
    `

})

export class SandboxComponent {
    name:string= "Herimanitra";
    age: number= 35;
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
    constructor()
    {
        console.log("demarrage du serveur, on peut tout init par le constructeur...")
        this.hasChildren=false;
        this.hasbirthday();
    }
    hasbirthday(){
        this.age += 1;
    }
    showAge()
    {
        return this.age;
    }
}