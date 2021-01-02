import { SearchParams } from './models/SearchParams';


export function getSearchParamsToRoute(searchParams: SearchParams): SearchParams {
  const params = new SearchParams();

  console.log(searchParams);
  for (const key of Object.keys(searchParams)) {
    console.log(key, searchParams[key]);
    if (searchParams[key] !== undefined) {
      params[key] = searchParams[key];
    }
  }

  return params;
}
