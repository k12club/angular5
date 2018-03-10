import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name:string;
  private age:number;
  private email:string;

  //dictionary
  private address:{
    street:string;
    city:string;
    province:string;
    postcode:string;
  }

  private todoList:Todo[];
  private isEditable:boolean = true;

  //array
  private skills:string[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.name ="Palm View";
    this.age = 20;
    this.email = "k12club@hotmail.com";

    this.address = { 
      street:"111",
      city:"222",
      province:"333",
      postcode:"444"
    };

    this.skills = ["Programming","gaming","est cola"];

    //call service
    this.todoService.getTodoList().subscribe((response)=>{
      this.todoList = response;
    })

  }
  addSkill(skill){
    this.skills.unshift(skill);
    return false;
  }

  toggleEdit(){
    this.isEditable =! this.isEditable;
  }

  removeSkill(skill){
    this.skills.forEach((element, index)=>{
      if (element == skill){
        this.skills.splice(index, 1);
      }
    })
  }

}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}