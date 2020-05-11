import { AutoIncrement, Column, Model, PrimaryKey, Table, Unique } from "sequelize-typescript";

@Table({tableName: "user", timestamps: false})
export class User extends Model<User> {
	@PrimaryKey
	@AutoIncrement
	@Column
	public id_user!: number;
	public id_media!: number;
	public user_username!: string;
	public user_email!: string;
	public user_password!: string;
	public user_first_name!: string;
	public user_last_name!: string;
	public user_display_name!: string;
	public user_description!: string;
	public user_about!: string;
}
