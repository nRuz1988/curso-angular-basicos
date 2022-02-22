import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TaskComponent } from './task.component';

//CommonModule : sirve para importar y utilizar ng en el html del modulo correspondiente
@NgModule({
  declarations: [
    TaskComponent
  ],
  exports:[
    TaskComponent
  ],
  imports: [CommonModule],
  providers: [],
  bootstrap: []
})
export class TaskModule { }
