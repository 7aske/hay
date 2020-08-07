import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "./Role";
import { User } from "./User";

@Table({tableName: "user_role", timestamps: false})
export class UserRole extends Model<UserRole> {
	@ForeignKey(()=> User)
	@Column
	private id_user!: number;

	@ForeignKey(()=> Role)
	@Column
	private id_role!: number;
}
