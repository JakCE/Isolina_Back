import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DetalleReservasService } from './detalle-reservas.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateDetalleReservaDTO } from './dto/detalle-reserva.dto';
import { DetalleReserva } from './detalle-reserva.entity';

@ApiBearerAuth()
@ApiTags('Detalle Reservas')
@Controller('detalle-reservas')
export class DetalleReservasController {
    constructor(private DetalleReservaService: DetalleReservasService){}

    @Post()
    @UseGuards(AuthGuard)
    createDetalleReserva(@Body() newDetalleReserva: CreateDetalleReservaDTO){
        return this.DetalleReservaService.createDetalleReserva(newDetalleReserva);
    }

    @Get()
    @UseGuards(AuthGuard)
    getDetalleReservas(): Promise<DetalleReserva[]> {
        return this.DetalleReservaService.getDetalleReservas();
    }

    @Get(':DetalleReservaID')
    @UseGuards(AuthGuard)
    getDetalleReserva(@Param('DetalleReservaID', ParseIntPipe) DetalleReservaID: number) {
        return this.DetalleReservaService.getDetalleReserva(DetalleReservaID);
    }

    @Delete(':DetalleReservaID')
    @UseGuards(AuthGuard)
    deleteDetalleReserva(@Param('DetalleReservaID', ParseIntPipe) DetalleReservaID: number){
        return this.DetalleReservaService.deleteDetalleReserva(DetalleReservaID);
    }

    @Patch(':DetalleReservaID')
    @UseGuards(AuthGuard)
    updateDetalleReserva(@Param('DetalleReservaID', ParseIntPipe) id: number, @Body() user: CreateDetalleReservaDTO){
        return this.DetalleReservaService.updateDetalleReserva(id, user);
    }
}
