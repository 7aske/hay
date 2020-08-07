import { AutoIncrement, Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({tableName: "category", timestamps: false})
export class Category extends Model<Category> {
	@PrimaryKey
	@AutoIncrement
	@Column
	private id_category!: number;

	@Column
	private category_name!: string;


	get id(): number {
		return this.id_category;
	}

	set id(value: number) {
		this.id_category = value;
	}

	get name(): string {
		return this.category_name;
	}

	set name(value: string) {
		this.category_name = name;
	}
}
