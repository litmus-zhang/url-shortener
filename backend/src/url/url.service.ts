import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUrlDto, shortUrlDto } from './dto/create-url.dto';
import { UpdateUrlDto } from './dto/update-url.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UrlService {
  constructor( private database: DatabaseService) {}
  generateShortUrl(): string {
    const random = Math.floor(Math.random() * 1000000);
    const uniqueNumber = Date.now() * 1000000 + random;
    return this.encodeBase62(uniqueNumber);
  }

  private encodeBase62(num: number): string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let encoded = '';
    while (num > 0) {
      const remainder = num % 62;
      encoded = chars[remainder] + encoded;
      num = Math.floor(num / 62);
    }
    return encoded || '0';
  }
 async encode(createUrlDto: CreateUrlDto) {

    // check if url is in the database
    // if it is, return the short url
    // if it is not, create a new url using the hash function
    // save the url to the database
    // return the short url
    const url = await this.database.url.findFirst({
      where: {
        longUrl: createUrlDto.url,
      },
    });

    if (url) {
      return  {
        message: 'Url encoded successfully',
        data: url.shortUrl,
      };
    }
    const shortUrl = this.generateShortUrl();
    const newUrl = await this.database.url.create({
      data: {
        longUrl: createUrlDto.url,
        shortUrl: shortUrl,
      },
    });
    return {
      message: 'Url encoded successfully',
      data: newUrl.shortUrl,
    };


  }
  async decode(createUrlDto: shortUrlDto) {

    // check if url is in the database
    // if it is, return the long url
    // if it is not, return an error
    const url = await this.database.url.findFirst({
      where: {
        shortUrl: createUrlDto.url,
      },
    });
    if (url) {
      return {
        message: 'Url decoded successfully',
        data: url.longUrl,
      };
    }
    return new BadRequestException('Url not found');
  }

  async findAll() {
    const data = await this.database.url.findMany({
      select: {
        longUrl: true,
        shortUrl: true,
        createdAt: true,
        updatedAt: true,
        NumberOfVisits: true,
      },
    });
    return {
      message: 'Urls fetched successfully',
      data,
    }
  }

  async findOne(url: string) {
    const urlData = await this.database.url.findFirst({
      where: {
        shortUrl: url,
      },
    });
    if (urlData) {
      await this.database.url.update({
        where: {
          id: urlData.id,
        },
         // increment the number of visits
         // by 1
         // and return the url data
         // with the number of visits
         // incremented by 1
        data: {
          NumberOfVisits: {
            increment: 1,
          },
        },
        select: {
          longUrl: true,
        }
      });
    return {
      message: 'Url fetched successfully',
      data: urlData.longUrl,
    };
    }
  }
  async statistic(url: string) {
    // check if url is in the database
    // if it is, return the long url
    // if it is not, return an error
    const urlData = await this.database.url.findFirst({
      where: {
        shortUrl: url,
      },
    });
    if (urlData) {
      return {
        message: 'Url fetched successfully',
        data: urlData,
      };
    }
    return new BadRequestException('Url not found');
  }

}
