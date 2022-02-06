import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {
  @Input() listItems: string[];

  @Output() deleteItemEmt: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router) {}

  public deleteItem(item: string): void {
    this.deleteItemEmt.emit(item);
  }

  public goBack(): void {
    this.router.navigate(['']).then(() => {});
  }
}
