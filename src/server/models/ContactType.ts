import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "contact_type", timestamps: false})
export class ContactType extends Model<ContactType> {
	@PrimaryKey
	@AutoIncrement
	@Column
	private id_contact_type!: number;

	@Column
	private contact_type_name!: string;

	@Column
	private contact_type_value_type!: string;

	get id(): number {
		return this.id_contact_type;
	}

	set id(value: number) {
		this.id_contact_type = value;
	}

	get name(): string {
		return this.contact_type_name;
	}

	set name(value: string) {
		this.contact_type_name = value;
	}

	get value_type(): string {
		return this.contact_type_value_type;
	}

	set value_type(value: string) {
		this.contact_type_value_type = value;
	}
}
