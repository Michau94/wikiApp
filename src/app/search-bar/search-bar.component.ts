import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  term: string = '';

  @Output() termEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.termEvent.emit(this.term);
  }
}
