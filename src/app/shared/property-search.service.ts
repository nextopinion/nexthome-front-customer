import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchParams } from './models/search-params';
import { environment } from '../../environments/environment';
import { camelToSnakeCase, capitalizeFirstLetter } from './util';
import { Property } from './models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertySearchService {

  constructor(private http: HttpClient) {
  }

  search(searchParams: SearchParams, page: number) {
    let paramsStr = '';

    for (let key of Object.keys(searchParams)) {
      if (searchParams[key] !== undefined && searchParams[key] !== 'null') {
        if (paramsStr.length) {
          paramsStr += '&';
        }

        let value = searchParams[key];
        if (value === 'true' || value === 'false') {
          value = capitalizeFirstLetter(value);

          if (key === 'house' || key === 'apartment' || key === 'commercial') {
            value = key.toUpperCase();
            key = 'property_type';
          }
        }

        paramsStr += camelToSnakeCase(key) + '=' + value;
      }
    }

    return this.http.get<{ count: number, results: Property[] }>(`${environment.api.url}property/?${paramsStr}&page=${page}`);
  }
}
