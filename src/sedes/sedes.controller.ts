import { Body, Controller, Post, UseGuards, Get, Delete, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SedesService } from './sedes.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateSedeDTO } from './dto/sede.dto';
import { Sede } from './sede.entity';

@ApiBearerAuth()
@ApiTags('Sedes')
@Controller('sedes')
export class SedesController {
    constructor(private sedeService: SedesService){}

    @Post()
    @UseGuards(AuthGuard)
    createSede(@Body() newSede: CreateSedeDTO){
        return this.sedeService.createSede(newSede);
    }

    @Get()
    @UseGuards(AuthGuard)
    getSedes(): Promise<Sede[]> {
        return this.sedeService.getSedes();
    }

    @Get(':SedeID')
    @UseGuards(AuthGuard)
    getSede(@Param('SedeID', ParseIntPipe) SedeID: number) {
        return this.sedeService.getSede(SedeID);
    }

    @Delete(':SedeID')
    @UseGuards(AuthGuard)
    deleteSede(@Param('SedeID', ParseIntPipe) SedeID: number){
        return this.sedeService.deleteSede(SedeID);
    }

    @Patch(':SedeID')
    @UseGuards(AuthGuard)
    updateSede(@Param('SedeID', ParseIntPipe) id: number, @Body() user: CreateSedeDTO){
        return this.sedeService.updateSede(id, user);
    }
}
