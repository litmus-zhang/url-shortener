import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';

@Controller('api')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post("encode")
  encode(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }
  @Post("decode")
  decode(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }

  @Get("list")
  findAll() {
    return this.urlService.findAll();
  }

  @Get('/statistic/:url_path')
  findOne(@Param('id') id: string) {
    return this.urlService.findOne(+id);
  }
  @Get('/:url_path')
  redirect(@Param('id') id: string) {
    return this.urlService.findOne(+id);
  }
}
