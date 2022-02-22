import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   selectedTodoIndex: number | null = null;
    todo = "";
    ArrayData: any = localStorage.getItem('key');
    Array:any[]=this.ArrayData? JSON.parse(this.ArrayData):[];
    index:Number=0;
    addButtonShow=true;
    updateButtonShow=false;

   
   addTodo(data:any){
     this.Array.push(data);
      localStorage.setItem('key', JSON.stringify(this.Array));
    }

    editTodo(data:any){
      this.todo=data.item.Title;
      this.selectedTodoIndex=data.index;
      this.updateButtonShow=true;
      this.addButtonShow=false;

    }

    deleteItem(data:any){
      this.Array.splice(data, 1);
      localStorage.setItem("key", JSON.stringify(this.Array))
    }

    updateTodoData(data:any){
      this.Array[this.selectedTodoIndex as number].Title=data;
      localStorage.setItem("key", JSON.stringify(this.Array))
      this.updateButtonShow=false;
      this.addButtonShow=true;
    }

    onChangeChecked(data:any){
      this.Array= this.Array.map((d)=>{
              if(d.id==data.id){
                d.Completed=data.isChecked
                return d;
              }else{
                return d;
              }
            })
            localStorage.setItem("key", JSON.stringify(this.Array))
    }
}



