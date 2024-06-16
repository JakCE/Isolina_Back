import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateColaboradorDTO } from './dto/colaborador.dto';
import { Colaborador } from './colaborador.entity';

@ApiBearerAuth()
@ApiTags('Colaboradores')
@Controller('colaboradores')
export class ColaboradoresController {
    constructor(private ColaboradorService: ColaboradoresService){}

    @Post()
    @UseGuards(AuthGuard)
    createColaborador(@Body() newColaborador: CreateColaboradorDTO){
        return this.ColaboradorService.createColaborador(newColaborador);
    }

    @Get()
    @UseGuards(AuthGuard)
    getColaboradores(): Promise<Colaborador[]> {
        return this.ColaboradorService.getColaboradores();
    }

    @Get(':ColaboradorID')
    @UseGuards(AuthGuard)
    getColaborador(@Param('ColaboradorID', ParseIntPipe) ColaboradorID: number) {
        return this.ColaboradorService.getColaborador(ColaboradorID);
    }

    @Delete(':ColaboradorID')
    @UseGuards(AuthGuard)
    deleteColaborador(@Param('ColaboradorID', ParseIntPipe) ColaboradorID: number){
        return this.ColaboradorService.deleteColaborador(ColaboradorID);
    }

    @Patch(':ColaboradorID')
    @UseGuards(AuthGuard)
    updateColaborador(@Param('ColaboradorID', ParseIntPipe) id: number, @Body() user: CreateColaboradorDTO){
        return this.ColaboradorService.updateColaborador(id, user);
    }
}
