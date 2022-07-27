import { Component, OnInit } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  term = '';
  result: [] = [];

  constructor(private wikiService: WikipediaService) {}

  setTerm(data: string) {
    this.wikiService.search(data).subscribe((res: any) => {
      this.result = res;

      console.log(res);
    });
  }

  ngOnInit(): void {}
}
