import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  @Input() array:any;

  @Output() givemeItemforEdit = new EventEmitter();
  @Output() givemeItemforDelete = new EventEmitter();
  @Output() checkStatus = new EventEmitter();

  todoItemForEdit(item:any, index:any){
    this.givemeItemforEdit.emit({item, index});
  }

  todoItemDeletion(index:any){
    this.givemeItemforDelete.emit(index);
  }
  
  changingCheckStatus($event:any){
    const id=$event.target.value;
    const isChecked=$event.target.checked;

    this.checkStatus.emit({id, isChecked});
  }

  constructor() { }

  ngOnInit(): void {
  }

}
