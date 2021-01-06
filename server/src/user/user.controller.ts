import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from './user.entity';
import { IUser } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}
    
    @Put()
    async update(@Body() userDto: IUser): Promise<User> {
        return this.usersService.update(userDto);
    }

    @Get()
    login(@Body() userDto: Partial<IUser>): Promise<User> {
        return this.usersService.login(userDto.login, userDto.password);
    }

    @Post()
    create(@Body() userDto: IUser): Promise<number> {
        return this.usersService.create(userDto).then(mark => mark.id);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<boolean> {
        return this.usersService.delete(id);
    }
}
