export class SearchParams {
  negotiationType: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  rooms: number;
  suites: number;
  bathrooms: number;
  parkingSpots: number;
  elevator: boolean;
  interphone: boolean;
  nearMall: boolean;
  nearBars: boolean;
  pool: boolean;
  partyRoom: boolean;
  americanKitchen: boolean;
  sportsCourt: boolean;
  furniture: boolean;
  barbecueGrill: boolean;
  balcony: boolean;
  concierge: boolean;
  gym: boolean;
  playground: boolean;
  sauna: boolean;
  house: boolean;
  apartment: boolean;
  commercial: boolean;

  constructor() {
    this.negotiationType = 'SELL';
  }

  static fromRouteParams(params: SearchParams) {
    const searchParams = new SearchParams();

    for (const key of Object.keys(params)) {
      const value = params[key];

      if (!isNaN(value)) {
        searchParams[key] = +value;
      } else if (value === 'false') {
        continue;
      } else if (value === 'true') {
        searchParams[key] = true;
      } else {
        searchParams[key] = value;
      }
    }

    return searchParams;
  }
}
