import { Body, Controller, Post, UseGuards, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateReservaDTO } from './dto/reserva.dto';
import { Reserva } from './reserva.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('reservas')
@Controller('reservas')
export class ReservasController {
    constructor(private ReservaService: ReservasService){}

    @Post()
    @UseGuards(AuthGuard)
    createReserva(@Body() newReserva: CreateReservaDTO){
        return this.ReservaService.createReserva(newReserva);
    }

    @Get()
    @UseGuards(AuthGuard)
    getReservas(): Promise<Reserva[]> {
        return this.ReservaService.getReservas();
    }

    @Get(':ReservaID')
    @UseGuards(AuthGuard)
    getReserva(@Param('ReservaID', ParseIntPipe) ReservaID: number) {
        return this.ReservaService.getReserva(ReservaID);
    }

    @Delete(':ReservaID')
    @UseGuards(AuthGuard)
    deleteReserva(@Param('ReservaID', ParseIntPipe) ReservaID: number){
        return this.ReservaService.deleteReserva(ReservaID);
    }

    @Patch(':ReservaID')
    @UseGuards(AuthGuard)
    updateReserva(@Param('ReservaID', ParseIntPipe) id: number, @Body() user: CreateReservaDTO){
        return this.ReservaService.updateReserva(id, user);
    }
}
