interface IUpdateWithOptions {
  name?: string
  description?: string
  price?: number
}

export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number
  ) {}

  // TODO: updateWith
  updateWith(product: IUpdateWithOptions) {
    this.name = product.name || this.name
    this.description = product.description || this.description
    this.price = product.price || this.price
  }
}
