import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "user", timestamps: false})
export class User extends Model<User> {
	@PrimaryKey
	@AutoIncrement
	@Column
	private id_user!: number;

	@Column
	private user_username!: string;

	@Column
	private user_email!: string;

	@Column
	private user_password!: string;

	@Column
	private user_first_name!: string;

	@Column
	private user_last_name!: string;

	@Column
	private user_address!: string;

	@Column
	private user_about!: string;

	@Column
	private user_display_name!: string;

	@Column
	private user_date_created!: Date;

	// @HasMany(() => Post)
	// private user_post!: Post[];


	get id(): number {
		return this.id_user;
	}

	set id(value: number) {
		this.id_user = value;
	}

	get username(): string {
		return this.user_username;
	}

	set username(value: string) {
		this.user_username = value;
	}

	get email(): string {
		return this.user_email;
	}

	set email(value: string) {
		this.user_email = value;
	}

	get password(): string {
		return this.user_password;
	}

	set password(value: string) {
		this.user_password = value;
	}

	get first_name(): string {
		return this.user_first_name;
	}

	set first_name(value: string) {
		this.user_first_name = value;
	}

	get last_name(): string {
		return this.user_last_name;
	}

	set last_name(value: string) {
		this.user_last_name = value;
	}

	get address(): string {
		return this.user_address;
	}

	set address(value: string) {
		this.user_address = value;
	}

	get about(): string {
		return this.user_about;
	}

	set about(value: string) {
		this.user_about = value;
	}

	get display_name(): string {
		return this.user_display_name;
	}

	set display_name(value: string) {
		this.user_display_name = value;
	}


	get date_created(): Date {
		return this.user_date_created;
	}

	set date_created(value: Date) {
		this.user_date_created = value;
	}
}
