export class SearchParams {
  negotiation_type: string;
  city: string;
  neighborhood: string;
  maxPrice: number;
  minRooms: number;

  constructor(negotiation_type = 'SELL') {
    this.negotiation_type = negotiation_type;
  }

  static fromRouteParams(params: SearchParams) {
    const searchParams = new SearchParams(params.negotiation_type);
    searchParams.city = params.city;
    searchParams.neighborhood = params.neighborhood;
    searchParams.maxPrice = params.maxPrice;
    searchParams.minRooms = params.minRooms;

    return searchParams;
  }
}
