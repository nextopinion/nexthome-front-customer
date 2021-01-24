import { SearchParams } from './models/search-params';


export function getOnlyDefinedSearchParams(searchParams: SearchParams): SearchParams {
  const params = new SearchParams();

  for (const key of Object.keys(searchParams)) {
    if (searchParams[key] !== undefined && searchParams[key] !== '') {
      params[key] = searchParams[key];
    }
  }

  return params;
}

export function camelToSnakeCase(str: string) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

export function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
