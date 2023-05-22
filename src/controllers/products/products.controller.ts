import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpCode,
  HttpStatus,
  ParseIntPipe
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';
import { CreateProductDto } from '../../dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get(':nuevoId')
  @HttpCode(HttpStatus.ACCEPTED)
  getProductById(@Param('nuevoId', ParseIntPipe) nuevoId: number) {
    return this.productsService.findOne(nuevoId);
  }

  @Get('')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return this.productsService.findAll();
  }

  @Post()
  createProduct(@Body() payload: CreateProductDto) {
    this.productsService.create(payload);
    return payload;
  }

  @Put(':productId')
  updateProducts(@Param('productId') productId: number, @Body() payload: any) {
    return {
      productId,
      payload,
    };
  }

  @Delete(':productId')
  deleteProducts(@Param('productId') productId: number) {
    return {
      message: 'El producto se eliminó correctamente',
      productId,
    };
  }
}
