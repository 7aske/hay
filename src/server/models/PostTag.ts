import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Post } from "./Post";
import { Tag } from "./Tag";

@Table({tableName: "post_tag", timestamps: false})
export class PostTag extends Model<PostTag> {
	@ForeignKey(()=> Post)
	@Column
	private id_post!: number;

	@ForeignKey(()=> Tag)
	@Column
	private id_tag!: number;
}
