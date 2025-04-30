import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, NotFoundException, Res, Query } from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto, shortUrlDto } from './dto/create-url.dto';
import { Response } from 'express';

@Controller('')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post("/api/encode")
  encode(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.encode(createUrlDto);
  }
  @HttpCode(HttpStatus.OK)
  @Post("/api/decode")
  decode(@Body() createUrlDto: shortUrlDto) {
    return this.urlService.decode(createUrlDto);
  }

  @Get("/api/list")
  findAll(@Query('page') page: string = "1", @Query('limit') limit: string = "10") {
    return this.urlService.findAll(parseInt(page), parseInt(limit));
  }

  @Get('/api/statistic/:url_path')
  findOne(@Param('url_path') url: string) {
    return this.urlService.statistic(url);
  }

  @HttpCode(HttpStatus.TEMPORARY_REDIRECT)
  @Get('/:url_path')
  async redirect(@Param('url_path') url: string, @Res() res: Response) {
    const result = await this.urlService.findOne(url);
    if (!result || !result.data) {
      throw new NotFoundException('URL not found');
    }
    return res.redirect(result.data);
  }
}
