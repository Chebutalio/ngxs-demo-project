import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ListState } from 'src/app/store/list.state';
import { Observable } from 'rxjs';
import { DeleteListItem } from "../../store/list.astions";

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css']
})

export class ListContainerComponent {
  @Select(ListState.SelectAllItems) listItems: Observable<string[]>;

  constructor(private store: Store) {}

  public deleteItem(item: string): void {
    this.store.dispatch(new DeleteListItem(item));
  }
}
