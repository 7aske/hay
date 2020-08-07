import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "role", timestamps: false})
export class Role extends Model<Role> {
	@AutoIncrement
	@PrimaryKey
	@Column
	private id_role!: number;

	@Column
	private role_name!: string;


	get id(): number {
		return this.id_role;
	}

	set id(value: number) {
		this.id_role = value;
	}

	get name(): string {
		return this.role_name;
	}

	set name(value: string) {
		this.role_name = value;
	}
}
