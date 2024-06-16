import { Body, Controller, Post, Get, UseGuards, Param, ParseIntPipe, Delete, Patch } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CargosService } from './cargos.service';
import { CreateCargoDTO } from './dto/cargo.dto';
import { Cargo } from './cargo.entity';

@ApiBearerAuth()
@ApiTags('Mesas')
@Controller('cargos')
export class CargosController {
    constructor(private CargoService: CargosService){}

    @Post()
    @UseGuards(AuthGuard)
    createCargo(@Body() newCargo: CreateCargoDTO){
        return this.CargoService.createCargo(newCargo);
    }

    @Get()
    @UseGuards(AuthGuard)
    getCargos(): Promise<Cargo[]> {
        return this.CargoService.getCargos();
    }

    @Get(':CargoID')
    @UseGuards(AuthGuard)
    getCargo(@Param('CargoID', ParseIntPipe) CargoID: number) {
        return this.CargoService.getCargo(CargoID);
    }

    @Delete(':CargoID')
    @UseGuards(AuthGuard)
    deleteCargo(@Param('CargoID', ParseIntPipe) CargoID: number){
        return this.CargoService.deleteCargo(CargoID);
    }

    @Patch(':CargoID')
    @UseGuards(AuthGuard)
    updateCargo(@Param('CargoID', ParseIntPipe) id: number, @Body() user: CreateCargoDTO){
        return this.CargoService.updateCargo(id, user);
    }
}
