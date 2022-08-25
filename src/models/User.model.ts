import { UUIDV4 } from "sequelize";
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  IsUUID,
  Default,
  IsEmail,
  AllowNull,
  Unique,
} from "sequelize-typescript";
import { Optional } from "sequelize/types";

export interface IUser {
  id: string;
  name: string;
  type: string;
}

export interface IUserCreate extends Optional<IUser, "id"> {}

@Table
export class User extends Model<IUser, IUserCreate> {
  @IsUUID(4)
  @PrimaryKey
  @Default(UUIDV4)
  @Column(DataType.STRING)
  declare id: string;

  @Column(DataType.STRING)
  name: string;

  @IsEmail
  @Unique({
    msg: "Email must be unique",
    name: "email",
  })
  @AllowNull(false)
  @Column(DataType.STRING)
  email: string;
}

export default User;
