import { AutoIncrement, BelongsToMany, Column, Model, PrimaryKey, Table } from "sequelize-typescript";
import { User } from "./User";
import { UserRole } from "./UserRole";

@Table({tableName: "role", timestamps: false})
export class Role extends Model<Role> {
	@AutoIncrement
	@PrimaryKey
	@Column
	private id_role!: number;

	@Column
	private role_name!: string;

	@BelongsToMany(() => User, () => UserRole, "id_user", "id_role")
	private user_role!: User[];
}
