import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pluck } from 'rxjs';

interface WikiRes {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    let url = 'https://en.wikipedia.org/w/api.php';

    if (!term) {
      console.error('Invalid search term!');
      term = 'Wikipedia';
    }
    return this.http
      .get<WikiRes>(`${url}`, {
        params: {
          action: 'query',
          list: 'search',
          srsearch: term,
          format: 'json',
          utf8: '1',
          origin: '*',
        },
      })
      .pipe(map((value) => value.query.search));
  }
}
