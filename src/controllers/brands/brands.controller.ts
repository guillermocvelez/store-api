import { Controller, Get, Query } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(@Query('search') search: string) {
    return `Marcas ${search}`;
  }
}
