import { AutoIncrement, Column, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { ContactType } from "./ContactType";
import { User } from "./User";

@Table({tableName: "contact", timestamps: false})
export class Contact extends Model<Contact> {
	@PrimaryKey
	@AutoIncrement
	@Column
	private id_contact!: number;

	@ForeignKey(() => ContactType)
	private id_contact_type!: number;

	@ForeignKey(() => User)
	private id_user!: number;

	@Column
	private contact_value!: string;

	get id(): number {
		return this.id_contact;
	}

	set id(value: number) {
		this.id_contact = value;
	}

	get contact_type(): number {
		return this.id_contact_type;
	}

	set contact_type(value: number) {
		this.id_contact_type = value;
	}

	get user(): number {
		return this.id_user;
	}

	set user(value: number) {
		this.id_user = value;
	}

	get value(): string {
		return this.contact_value;
	}

	set value(value: string) {
		this.contact_value = value;
	}
}
