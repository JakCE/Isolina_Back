import { Body, Controller, Get, Post, Param, ParseIntPipe, Delete, Patch, UseGuards } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { Usuario } from './usuario.entity';
import { UsuariosService } from './usuarios.service';
import { UpdateUserDTO } from './dto/update-user.dto';
import { AuthGuard } from '../auth/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('usuarios')
export class UsuariosController {
    constructor(private userService: UsuariosService){}

    @Post()
    createUser(@Body() newUser: CreateUserDTO) {
        return this.userService.createUser(newUser)
    }

    @ApiBearerAuth()
    @Get()
    @UseGuards(AuthGuard)
    getUsers(): Promise<Usuario[]> {
        return this.userService.getUsers();
    }

    @ApiBearerAuth()
    @Get(':UsuarioID')
    @UseGuards(AuthGuard)
    getUser(@Param('UsuarioID', ParseIntPipe) UsuarioID: number) {
        return this.userService.getUser(UsuarioID);
    }

    @ApiBearerAuth()
    @Delete(':UsuarioID')
    @UseGuards(AuthGuard)
    deleteUser(@Param('UsuarioID', ParseIntPipe) UsuarioID: number){
        return this.userService.deleteUser(UsuarioID);
    }

    @ApiBearerAuth()
    @Patch(':UsuarioID')
    @UseGuards(AuthGuard)
    updateUser(@Param('UsuarioID', ParseIntPipe) id: number, @Body() user: UpdateUserDTO){
        return this.userService.updateUser(id, user);
    }

    @Get()
    findUserByEmail(email: string){
        return this.userService.findUserByEmail(email);
    }
}
