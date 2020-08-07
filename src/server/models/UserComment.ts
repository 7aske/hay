import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Comment } from "./Comment";
import { User } from "./User";

@Table({tableName: "user_comment", timestamps: false})
export class UserComment extends Model<UserComment> {
	@ForeignKey(() => User)
	@Column
	private id_user!: number;

	@ForeignKey(() => Comment)
	@Column
	private id_comment!: number;
}
