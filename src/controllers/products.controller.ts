import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

import { ProductsService } from './../services/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return this.productService.findAll();
  }

  @Get(':productId')
  getProduct(@Param('productId') productId: string) {
    return this.productService.findOne(+productId);
  }

  @Post()
  create(@Body() payload: any) {
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productService.update(+id, payload);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      message: 'accion de borrar',
      id,
    };
  }
}
