import { Body, Controller, Post, Get, UseGuards, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CartaService } from './carta.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateCartaDTO } from './dto/carta.dto';
import { Carta } from './carta.entity';

@ApiBearerAuth()
@ApiTags('Carta')
@Controller('carta')
export class CartaController {
    constructor(private CartaService: CartaService){}

    @Post()
    @UseGuards(AuthGuard)
    createCarta(@Body() newCarta: CreateCartaDTO){
        return this.CartaService.createCarta(newCarta);
    }

    @Get()
    @UseGuards(AuthGuard)
    getCartas(): Promise<Carta[]> {
        return this.CartaService.getCartas();
    }

    @Get(':CartaID')
    @UseGuards(AuthGuard)
    getCarta(@Param('CartaID', ParseIntPipe) CartaID: number) {
        return this.CartaService.getCarta(CartaID);
    }

    @Delete(':CartaID')
    @UseGuards(AuthGuard)
    deleteCarta(@Param('CartaID', ParseIntPipe) CartaID: number){
        return this.CartaService.deleteCarta(CartaID);
    }

    @Patch(':CartaID')
    @UseGuards(AuthGuard)
    updateCarta(@Param('CartaID', ParseIntPipe) id: number, @Body() user: CreateCartaDTO){
        return this.CartaService.updateCarta(id, user);
    }
}
