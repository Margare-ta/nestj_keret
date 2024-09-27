import { Controller, Get, Param, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Query } from '@nestjs/common';
import { Quotes } from './quotes'

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

  @Get('quotes')
  @Render('quoteslist')
  quoteslist(){
    return {Quotes: Quotes.quotes}
  }

  @Get('randomQuote')
  @Render('randomQuote')
  randomQuote(){
    const randomIndex = Math.floor(Math.random() * Quotes.quotes.length);
    const randomQuote = Quotes.quotes[randomIndex];
    return { quote: randomQuote };
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
