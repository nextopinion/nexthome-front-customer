import { Broker } from './broker.model';
import { Photo } from './photo.model';

export class Property {
  id: number;
  broker: Broker;
  negotiation_type: string;
  name: string;
  description: string;
  property_type: string;
  rooms: number;
  parking_spots: number;
  suites: number;
  bathrooms: number;
  constructed_area: number;
  private_area: number;
  total_area: number;
  elevator: boolean;
  interphone: boolean;
  near_mall: boolean;
  near_bars: boolean;
  pool: boolean;
  party_room: boolean;
  american_kitchen: boolean;
  sports_court: boolean;
  furniture: boolean;
  barbecue_grill: boolean;
  balcony: boolean;
  concierge: boolean;
  gym: boolean;
  playground: boolean;
  sauna: boolean;
  price: number;
  iptu_price: number;
  condominium_price: number;
  is_active: boolean;
  images: Photo[];
  created: string;
  modified: string;
  address: Address;
  variable_price: boolean;
  pixel_id: string;

  constructor() {
    this.images = [];
    this.address = new Address('Brasil');
  }

  static factory(origin: Property): Property {
    const property = new Property();
    property.id = origin.id;
    property.broker = origin.broker;
    property.negotiation_type = origin.negotiation_type;
    property.name = origin.name;
    property.description = origin.description;
    property.property_type = origin.property_type;
    property.rooms = origin.rooms;
    property.parking_spots = origin.parking_spots;
    property.suites = origin.suites;
    property.bathrooms = origin.bathrooms;
    property.private_area = origin.private_area;
    property.constructed_area = origin.constructed_area;
    property.total_area = origin.total_area;
    property.elevator = origin.elevator;
    property.interphone = origin.interphone;
    property.near_mall = origin.near_mall;
    property.near_bars = origin.near_bars;
    property.pool = origin.pool;
    property.party_room = origin.party_room;
    property.american_kitchen = origin.american_kitchen;
    property.sports_court = origin.sports_court;
    property.furniture = origin.furniture;
    property.barbecue_grill = origin.barbecue_grill;
    property.balcony = origin.balcony;
    property.concierge = origin.concierge;
    property.gym = origin.gym;
    property.playground = origin.playground;
    property.sauna = origin.sauna;
    property.price = origin.price;
    property.iptu_price = origin.iptu_price;
    property.condominium_price = origin.condominium_price;
    property.is_active = origin.is_active;
    property.images = origin.images;
    property.created = origin.created;
    property.modified = origin.modified;
    property.address = { ...property.address, ...origin.address };
    property.variable_price = origin.variable_price;
    property.pixel_id = origin.pixel_id;

    return property;
  }

  hasDifferential(): boolean {
    return this.elevator || this.interphone || this.near_mall || this.near_bars || this.pool || this.party_room
      || this.american_kitchen || this.sports_court || this.furniture || this.gym || this.barbecue_grill || this.balcony
      || this.concierge || this.playground;
  }

  getPropertyType(): string {
    if (this.property_type === 'casa') {
      return 'Casa';
    } else if (this.property_type === 'apartamento') {
      return 'Apartamento';
    }
    return 'Comercial';
  }

  getNegotiationType(): string {
    if (this.negotiation_type === 'SELL') {
      return 'Venda';
    } else if (this.negotiation_type === 'RENTAL') {
      return 'Aluguel';
    }
    return 'Temporada';
  }
}

export class Address {
  country: string;
  zip_code: number;
  street: string;
  street_line2: string;
  number: number;
  city: string;
  state: string;
  neighborhood: string;

  constructor(country?: string, zip_code?: number, street?: string, street_line2?: string, number?: number, city?: string,
              state?: string, neighborhood?: string) {
    this.country = country;
    this.zip_code = zip_code;
    this.street = street;
    this.street_line2 = street_line2;
    this.number = number;
    this.city = city;
    this.state = state;
    this.neighborhood = neighborhood;
  }

  static fromProperty(property: Property) {
    return new Address(property.address.country, property.address.zip_code, property.address.street, property.address.street_line2,
      property.address.number, property.address.city, property.address.state, property.address.neighborhood);
  }
}
