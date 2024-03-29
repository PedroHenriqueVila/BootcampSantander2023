import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ListViewComponent } from './list-view/list-view.component';



@NgModule({
  declarations: [
    InputComponent,
    ListViewComponent
  ],
  exports:[
    ListViewComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
