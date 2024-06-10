import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import { AuthGuard } from './guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('login')
    login(@Body() user: LoginDTO){
        return this.authService.login(user);
    }

    @Post('register')
    register(@Body() user: RegisterDTO){
        return this.authService.register(user);
    }

    @ApiBearerAuth()
    @Get('helloworld')
    @UseGuards(AuthGuard)
    prueba(){
        return 'Hello World!!'
    }
}