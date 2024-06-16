import { Body, Controller, Post, UseGuards, Get, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { MesasService } from './mesas.service';
import { CreateMesaDTO } from './dto/mesa.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Mesa } from './mesa.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Mesas')
@Controller('mesas')
export class MesasController {
    constructor(private MesaService: MesasService){}

    @Post()
    @UseGuards(AuthGuard)
    createMesa(@Body() newMesa: CreateMesaDTO){
        return this.MesaService.createMesa(newMesa);
    }

    @Get()
    @UseGuards(AuthGuard)
    getMesas(): Promise<Mesa[]> {
        return this.MesaService.getMesas();
    }

    @Get(':MesaID')
    @UseGuards(AuthGuard)
    getMesa(@Param('MesaID', ParseIntPipe) MesaID: number) {
        return this.MesaService.getMesa(MesaID);
    }

    @Delete(':MesaID')
    @UseGuards(AuthGuard)
    deleteMesa(@Param('MesaID', ParseIntPipe) MesaID: number){
        return this.MesaService.deleteMesa(MesaID);
    }

    @Patch(':MesaID')
    @UseGuards(AuthGuard)
    updateMesa(@Param('MesaID', ParseIntPipe) id: number, @Body() user: CreateMesaDTO){
        return this.MesaService.updateMesa(id, user);
    }
}
