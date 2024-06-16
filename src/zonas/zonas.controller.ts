import { Body, Controller, Post, UseGuards, Get, Delete, Patch, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ZonasService } from './zonas.service';
import { CreateZonaDTO } from './dto/create-zona.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Zona } from './zona.entity';

@ApiBearerAuth()
@ApiTags('Zonas')
@Controller('zonas')
export class ZonasController {
    constructor(private zonaService: ZonasService){}

    @Post()
    @UseGuards(AuthGuard)
    createZona(@Body() newZona: CreateZonaDTO){
        return this.zonaService.createZona(newZona);
    }

    @Get()
    @UseGuards(AuthGuard)
    getZonas(): Promise<Zona[]> {
        return this.zonaService.getZonas();
    }

    @Get(':ZonaID')
    @UseGuards(AuthGuard)
    getZona(@Param('ZonaID', ParseIntPipe) ZonaID: number) {
        return this.zonaService.getZona(ZonaID);
    }

    @Delete(':ZonaID')
    @UseGuards(AuthGuard)
    deleteZona(@Param('ZonaID', ParseIntPipe) ZonaID: number){
        return this.zonaService.deleteZona(ZonaID);
    }

    @Patch(':ZonaID')
    @UseGuards(AuthGuard)
    updateZona(@Param('ZonaID', ParseIntPipe) id: number, @Body() user: CreateZonaDTO){
        return this.zonaService.updateZona(id, user);
    }
}
