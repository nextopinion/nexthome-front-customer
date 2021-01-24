export class SearchParams {
  negotiationType: string;
  city: string;
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
      searchParams[key] = params[key];
    }

    return searchParams;
  }
}
