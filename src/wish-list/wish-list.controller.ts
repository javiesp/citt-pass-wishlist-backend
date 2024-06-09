import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { WishListService } from './wish-list.service';
import { CreateWishListDto } from './dto/create-wish-list.dto';
import { UpdateWishListDto } from './dto/update-wish-list.dto';
import { MessagePattern } from '@nestjs/microservices';


@Controller('wish-list')
export class WishListController {
  constructor(private readonly wishListService: WishListService) {}

  @Post('create-wishList-type')
  @MessagePattern("createWishList")// se comunica con la api por medio de message pattern
  create(@Body() createWishListDto: CreateWishListDto) {
    console.log('asi se recibe', createWishListDto)
    return this.wishListService.createWishList(createWishListDto);
  }

  @Get('/find-all-wishList-types')
  @MessagePattern("findAllWishLists")
  findAll() {
    return this.wishListService.findAllWishLists();
  }

  @Get('/find-one-wishList-type/:id') 
  @MessagePattern('findOneWishList')
  findOne(id: string) {
    return this.wishListService.findOneWishList(id);
  }

  @Put('/update-wishList-type/:id')
  @MessagePattern('updateWishList')
  update(payload) { 
    console.log(payload) 
    return this.wishListService.updateWishList(payload.id, payload.updateWishListDto);
  }

  @Delete('/delete-wishList-type/:id')
  @MessagePattern('removeWishList')
  remove(id: string) {
    return this.wishListService.removeWishList(id);
  }
}

