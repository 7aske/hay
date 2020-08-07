import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "tag", timestamps: false})
export class Tag extends Model<Tag> {
	@PrimaryKey
	@AutoIncrement
	@Column
	private id_tag!: number;

	@Column
	private tag_name!: string;

	get id(): number {
		return this.id_tag;
	}

	set id(value: number) {
		this.id_tag = value;
	}

	get name(): string {
		return this.tag_name;
	}

	set name(value: string) {
		this.tag_name = value;
	}
}
