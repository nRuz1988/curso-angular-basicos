import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['../../styles.css']
})
export class TaskComponent {

  arrListado : string[] =["Nicolas","Romina","Rafael","Antonieta"];

  limpiar(){
    this.arrListado = [];
  }

 }


