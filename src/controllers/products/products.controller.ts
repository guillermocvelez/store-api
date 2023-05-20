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
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':nuevoId')
  @HttpCode(HttpStatus.ACCEPTED)
  newEndpoint(@Param('nuevoId') nuevoId: string) {
    return {
      message: `nuevo id ${nuevoId}`,
    };
  }

  @Get('')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products ${limit} and ${offset} and ${brand}`,
    };
  }

  @Post()
  createProduct(@Body() payload: any) {
    return {
      message: 'Acción de crear',
      payload,
    };
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
