import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product.entity';

import { CreateProductDto } from '../../dtos/products.dto';


@Injectable()
export class ProductsService {
  private counter = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'blabla',
      price: 3000,
      stock: 10,
      image: 'https://blabla.com',
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((product) => product.id == id);
    if (!product) {
      throw new NotFoundException('EL producto con el id x no existe');
    }
    return product;
  }

  create(payload: CreateProductDto) {
    this.counter = this.counter + 1;
    const newProduct = {
      id: this.counter,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
}
