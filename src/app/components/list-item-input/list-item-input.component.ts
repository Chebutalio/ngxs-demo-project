import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { AddListItem } from "../../store/list.astions";

@Component({
  selector: 'app-list-item-input',
  templateUrl: './list-item-input.component.html',
  styleUrls: ['./list-item-input.component.css']
})

export class ListItemInputComponent {

  public form: any;
  public showItemAdded: boolean = false;

  constructor(private store: Store, private router: Router) {
    this.form = new FormGroup({
      listItem: new FormControl('')
    });
  }

  public submitItem(): void {
    this.showItemAdded = true;
    const item = this.form.get('listItem').value;
    this.store.dispatch(new AddListItem(item));
    this.form.reset();
    setTimeout(() => {
      this.showItemAdded = false;
    }, 2000);
  }

  public viewList(): void {
    this.router.navigate(['list']).then(() => {});
  }
}
