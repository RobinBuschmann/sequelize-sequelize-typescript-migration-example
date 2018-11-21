import {BelongsToMany, Column, Model, Table} from 'sequelize-typescript';
import {Product} from '../products/product';

@Table
export class User extends Model<User> {

    @Column
    name: string;

    @BelongsToMany(() => Product, 'UserProduct', 'userId', 'productId')
    products: any[];
}