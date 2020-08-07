import { AutoIncrement, BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Role } from "./Role";
import { UserRole } from "./UserRole";

@Table({tableName: "user", timestamps: false})
export class User extends Model<User> {
	@PrimaryKey
	@AutoIncrement
	@Column
	id_user!: number;

	@Column
	user_username!: string;

	@Column
	user_email!: string;

	@Column(DataType.TEXT)
	user_password!: string;

	@Column
	user_first_name!: string;

	@Column
	user_last_name!: string;

	@Column
	user_address!: string;

	@Column
	user_about!: string;

	@Column
	user_display_name!: string;

	@Column
	user_date_created!: Date;

	@BelongsToMany(() => Role, () => UserRole, "id_role", "id_user")
	roles!: Role[];
}
