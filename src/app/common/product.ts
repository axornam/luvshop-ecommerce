export class Product {
  sku: string = '';
  name: string = '';
  description: string = '';
  unitPrice: number = 0;
  imageUrl: string = '';
  active: boolean = false;
  unitsInStock: number = 0;
  dateCreated: Date = new Date();
  lastUpdated: Date = new Date();
  links: string[] = [];
  category: number = 0;
}
