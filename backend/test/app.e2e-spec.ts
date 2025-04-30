import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import * as pactum from "pactum"
import { DatabaseService } from '../src/database/database.service';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;
  let database: DatabaseService;


  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    await app.init();
    await app.listen(3300);

    database = app.get(DatabaseService);
    // await database.cleanDB();

    const baseUrl = 'http://localhost:3300'
    pactum.request.setBaseUrl(baseUrl);
  });
  afterAll(async () => {
    app.close();
  });

  it('/health', () => {
    return pactum.spec()
      .get('/health')
      .expectStatus(200)
      .expectJsonLike({
        message: "All system operational",
        status: 200
      });
  });
  const body = {
    longUrl: "https://indicina.co",
    shortUrl: "http://short.est/GeAi9K"
  }
  describe("URL module", () => {
    it("encode url", () => {
      return pactum
        .spec()
        .post('/api/encode')
        .withBody(body.longUrl)
        .expectStatus(201)
        .expectJsonLike({
          message: "Url encoded successfully",
          data: "/.+/"
        })
    })
    it("decode url", () => {

      return pactum
        .spec()
        .post('/api/decode')
        .withBody(body.shortUrl)
        .expectStatus(200)
        .expectJsonLike({
          message: "Url decoded successfully",
          data: "/.+/"
        })
    })
    it("list all urls", () => {
      return pactum
        .spec()
        .get('/api/list')
        .expectStatus(200)
        .expectJsonLike({
          message: "Urls fetched successfully",
          data: "/.+/"
        })
    })
    it("Get a urls and return its statistics", () => {

      return pactum
        .spec()
        .get('/api/statistic/:url_path')
        .expectStatus(200)
        .expectJsonLike({
          message: "Urls fetched successfully",
          data: "/.+/"
        })
    })
    it("redirect a short urls to the original long url", () => {
      return pactum
        .spec()
        .get('/api/statistic/:url_path')
        .expectStatus(HttpStatus.TEMPORARY_REDIRECT)
        .expectJsonLike({
          message: "Urls fetched successfully",
          data: "/.+/"
        })
    })
  })
});
