import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { DetallePedidosService } from './detalle-pedidos.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateDetallePedidoDTO } from './dto/detalle-pedido.dto';
import { DetallePedido } from './detalle-pedido.entity';

@ApiBearerAuth()
@ApiTags('Detalle Pedidos')
@Controller('detalle-pedidos')
export class DetallePedidosController {
    constructor(private DetallePedidoService: DetallePedidosService){}

    @Post()
    @UseGuards(AuthGuard)
    createDetallePedido(@Body() newDetallePedido: CreateDetallePedidoDTO){
        return this.DetallePedidoService.createDetallePedido(newDetallePedido);
    }

    @Get()
    @UseGuards(AuthGuard)
    getDetallePedidos(): Promise<DetallePedido[]> {
        return this.DetallePedidoService.getDetallePedidos();
    }

    @Get(':DetallePedidoID')
    @UseGuards(AuthGuard)
    getDetallePedido(@Param('DetallePedidoID', ParseIntPipe) DetallePedidoID: number) {
        return this.DetallePedidoService.getDetallePedido(DetallePedidoID);
    }

    @Delete(':DetallePedidoID')
    @UseGuards(AuthGuard)
    deleteDetallePedido(@Param('DetallePedidoID', ParseIntPipe) DetallePedidoID: number){
        return this.DetallePedidoService.deleteDetallePedido(DetallePedidoID);
    }

    @Patch(':DetallePedidoID')
    @UseGuards(AuthGuard)
    updateDetallePedido(@Param('DetallePedidoID', ParseIntPipe) id: number, @Body() user: CreateDetallePedidoDTO){
        return this.DetallePedidoService.updateDetallePedido(id, user);
    }
}
