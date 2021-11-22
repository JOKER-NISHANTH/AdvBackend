import * as mongoose from "mongoose";



import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    username: string;


    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
export interface User extends mongoose.Document {
    // id: string;
    username: string;
    email: string;
    password: string;
}
