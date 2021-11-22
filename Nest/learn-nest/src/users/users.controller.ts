import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserDTO } from 'src/dto/users.dto';
import { User } from './users.model';
import { UsersService } from "./users.service"

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Post("/register")
    async createUser(@Body() userDto: UserDTO): Promise<string> {
        return await this.userService.register(userDto)
    }

    @Get("/all")
    async getAllUsers(): Promise<User[]> {
        return await this.userService.getUsers();
    }

    @Get("/one/:id")
    async getOneUser(@Param('id') userId: string) {

        return this.userService.getOneUser(userId);
    }

    @Patch('/update/:id')
    async updateUser(
        @Param('id') userId: string,
        @Body() userDto: UserDTO
    ) {
        const updatedPro = await this.userService.updateUser(userId, userDto)
        return "Updated Successfully"
    }


    @Delete("delete/:id")
    async deleteUser(@Param('id') userId: string) {
        await this.userService.deleteUser(userId);
        return "Deleted Successfully"

    }

}
