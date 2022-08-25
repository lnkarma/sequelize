import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  IsUUID,
} from "sequelize-typescript";

export interface IBookmark {
  id: string;
  name: string;
  type: string;
}

@Table
export class Bookmark extends Model<IBookmark> {
  @IsUUID(4)
  @PrimaryKey
  @Column(DataType.STRING)
  declare id: string;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  type: string;
}

export default Bookmark;
