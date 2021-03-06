import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchParams } from './models/search-params';
import { environment } from '../../environments/environment';
import { camelToSnakeCase } from './util';
import { Property } from './models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertySearchService {

  constructor(private http: HttpClient) {
  }

  search(searchParams: SearchParams, page: number, ordering: '-created' | 'price' | '-price') {
    let paramsStr = '';

    for (let key of Object.keys(searchParams)) {
      if (searchParams[key] !== undefined && searchParams[key] !== 'null' && searchParams[key] !== false) {
        if (paramsStr.length) {
          paramsStr += '&';
        }

        let value = searchParams[key];
        if (value === true) {
          value = 'True';

          if (key === 'house' || key === 'apartment' || key === 'commercial') {
            value = key.toUpperCase();
            key = 'property_type';
          }
        }

        paramsStr += camelToSnakeCase(key) + '=' + value;
      }
    }

    return this.http.get<{ count: number, results: Property[] }>(`${environment.api.url}property/?${paramsStr}`
      + `&page=${page}&ordering=${ordering}`);
  }

  getRecommendations(city: string) {
    return this.http.get<{ count: number, results: Property[] }>(`${environment.api.url}property/?city=${city}`
      + `&page=1&ordering=-created`);
  }
}
