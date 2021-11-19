import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get(":name")
  // getName(@Param() payload): string {
  getName(@Param("name") name): string {

    // console.log(payload)
    // return "Welcome " + payload.name;
    // return "Welcome " + name;

    return this.appService.getName(name);
  }
  /*
  @Post()
  createRecord() {

  }

  @Put()
  updateRecord() {

  }

  @Patch()
  patchRecord() {

  }

  @Delete()
  deleteRecord() {

  }

  */
}
