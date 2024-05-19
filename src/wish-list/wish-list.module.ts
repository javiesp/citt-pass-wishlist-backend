import { Module } from '@nestjs/common';
import { WishListService } from './wish-list.service';
import { WishListController } from './wish-list.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WishListSchema } from './entities/wish-list.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'WishList', schema: WishListSchema }])],
  controllers: [WishListController],
  providers: [WishListService],
})
export class WishListModule {}
