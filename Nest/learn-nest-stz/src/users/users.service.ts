import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users.model';
import { UserDTO } from 'src/dto/users.dto';
@Injectable()
export class UsersService {
    constructor(@InjectModel("User") private readonly userModel: Model<User>) { }

    private async findUser(id: string): Promise<User> {

        let user;
        try {
            user = await this.userModel.findById(id);
        } catch (error) {
            throw new NotFoundException("Could not find product .");
        }
        if (!user) throw new NotFoundException("Could not find product .");

        return user;

    }


    async register(users) {
        const { username, email, password } = users;
        const newUser = new this.userModel({
            username,
            email,
            password
        });
        const result = await newUser.save();
        // console.log(result)
        return result.id as string;
    }

    async getUsers() {

        const users = await this.userModel.find().exec();
        // console.log(users);
        return users

    }


    async getOneUser(userId: string) {
        const user = await this.findUser(userId);
        return { id: user.id, username: user.username, password: user.password, email: user.email };
    }

    async updateUser(userId: string, userBto) {
        const updateUser = await this.findUser(userId);
        const { username, password, email } = userBto;
        if (username) updateUser.username = username;
        if (password) updateUser.password = password;
        if (email) updateUser.email = email;
        updateUser.save();
    }

    async deleteUser(userId: string): Promise<void> {
        // await this.userModel.deleteOne({ _id: productId }).exec();
        const result = await this.userModel.deleteOne({ id: userId }).exec();
        console.log(result)
        if (result.deletedCount === 0) throw new NotFoundException("Could not find product .");
        // const product = await this.findUser(productId);

    }


}
