import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Query } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }

  @Get('hatterszin')
  @Render('hatter')
  hatterszin(@Query('bgColor')bgColor: string = '#90EE90'){
    return{
      bgColor
    }
  }

  #jegkremek=[
    {nev:'eper fagyi',ar:444},
    {nev:'vanilia fagyi',ar:300},
    {nev:'pisztáciás fagyi',ar:1050},

  ]

  @Get('jekrem')
  @Render('jegkremlista')
  jegkremlista(){
    return {
      jegkremek: this.#jegkremek
    }
  }

  @Get('jegkrem/:id')
  @Render('jegkrem')
  jegkrem(@Param('id') id: string){
    return{
      id,
      nev: "csoki fagyi",
      ar:400
    }
  }
}
