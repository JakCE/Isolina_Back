import { Body, Controller, Post, UseGuards, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreatePedidoDTO } from './dto/pedido.dto';
import { Pedido } from './pedido.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Pedidos')
@Controller('pedidos')
export class PedidosController {
    constructor(private PedidoService: PedidosService){}

    @Post()
    @UseGuards(AuthGuard)
    createPedido(@Body() newPedido: CreatePedidoDTO){
        return this.PedidoService.createPedido(newPedido);
    }

    @Get()
    @UseGuards(AuthGuard)
    getPedidos(): Promise<Pedido[]> {
        return this.PedidoService.getPedidos();
    }

    @Get(':PedidoID')
    @UseGuards(AuthGuard)
    getPedido(@Param('PedidoID', ParseIntPipe) PedidoID: number) {
        return this.PedidoService.getPedido(PedidoID);
    }

    @Delete(':PedidoID')
    @UseGuards(AuthGuard)
    deletePedido(@Param('PedidoID', ParseIntPipe) PedidoID: number){
        return this.PedidoService.deletePedido(PedidoID);
    }

    @Patch(':PedidoID')
    @UseGuards(AuthGuard)
    updatePedido(@Param('PedidoID', ParseIntPipe) id: number, @Body() user: CreatePedidoDTO){
        return this.PedidoService.updatePedido(id, user);
    }
}
