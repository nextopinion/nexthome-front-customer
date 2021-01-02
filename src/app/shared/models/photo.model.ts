export class Photo {
  id: number;
  image: string;
  description: string;

  constructor(image: string, description?: string) {
    this.image = image;
    this.description = description;
  }
}
