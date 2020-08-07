import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "./Category";
import { Post } from "./Post";

@Table({tableName: "post_category", timestamps: false})
export class PostCategory extends Model<PostCategory> {
	@ForeignKey(()=> Post)
	@Column
	private id_post!: number;

	@ForeignKey(()=> Category)
	@Column
	private id_category!: number;
}
