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
    name= "Herimanitra";
    age= 35;
    person = {
        firstname: 'steve',
        lastname: 'mayer'
    }
    constructor()
    {
        console.log("demarrage du serveur, on peut tout init par le constructeur...")
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